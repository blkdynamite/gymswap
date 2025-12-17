"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const listingSchema = z.object({
  gymName: z.string().min(1, "Gym name is required").max(100, "Gym name is too long"),
  location: z.string().min(1, "Location is required").max(200, "Location is too long"),
  monthlyPrice: z.coerce.number().positive("Monthly price must be positive"),
  contractEndDate: z.coerce.date().optional(),
  details: z.string().max(1000, "Details are too long").optional(),
  offlineTransferAcknowledged: z.boolean().refine((val) => val === true, {
    message: "You must acknowledge the offline transfer process",
  }),
  transferabilityConfirmed: z.boolean().refine((val) => val === true, {
    message: "You must confirm that you have reviewed your gym contract",
  }),
});

export async function createListing(formData: FormData) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }

  try {
    const contractEndDateValue = formData.get("contractEndDate");
    const detailsValue = formData.get("details");

    const rawData = {
      gymName: formData.get("gymName"),
      location: formData.get("location"),
      monthlyPrice: formData.get("monthlyPrice"),
      contractEndDate: contractEndDateValue && contractEndDateValue.toString().trim() !== "" 
        ? contractEndDateValue 
        : undefined,
      details: detailsValue && detailsValue.toString().trim() !== "" 
        ? detailsValue.toString() 
        : undefined,
      offlineTransferAcknowledged: formData.get("offlineTransferAcknowledged") === "on",
      transferabilityConfirmed: formData.get("transferabilityConfirmed") === "on",
    };

    const validatedData = listingSchema.parse(rawData);

    const listing = await prisma.listing.create({
      data: {
        userId: user.id,
        gymName: validatedData.gymName,
        location: validatedData.location,
        monthlyPrice: validatedData.monthlyPrice,
        contractEndDate: validatedData.contractEndDate,
        details: validatedData.details,
        isAvailable: true,
        isPublished: false,
        legalAcknowledgeAt: new Date(),
        isOriginalGymLead: false,
      },
    });

    revalidatePath("/search");
    redirect("/dashboard/lister?success=true");
  } catch (error) {
    // Re-throw redirect errors (Next.js uses these for navigation)
    if (error && typeof error === "object" && "digest" in error) {
      const digest = (error as { digest?: string }).digest;
      if (digest?.startsWith("NEXT_REDIRECT")) {
        throw error;
      }
    }
    
    if (error instanceof z.ZodError) {
      return {
        error: error.errors[0].message,
      };
    }
    console.error("Listing creation error:", error);
    return {
      error: "Failed to create listing. Please try again.",
    };
  }
}

