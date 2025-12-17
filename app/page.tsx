"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import LegalNotice from "@/components/ui/legal-notice";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/4164754/pexels-photo-4164754.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source
            src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          {/* Fallback image */}
          <Image
            src="https://images.pexels.com/photos/4164754/pexels-photo-4164754.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Gym background"
            fill
            className="object-cover"
            unoptimized
          />
        </video>
        {/* Dark overlay with blur */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Your Membership, Unlocked.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg leading-8 text-white/90 sm:text-xl max-w-2xl mx-auto"
          >
            The secure marketplace to list, swap, or take over gym contracts. Stop paying for what
            you don&apos;t use.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <Link
              href="/search"
              className="rounded-md bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
            >
              Explore Memberships
            </Link>
            <Link
              href="/list"
              className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
            >
              List Your Gym — $5
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="relative z-10 bg-white/95 backdrop-blur-sm border-t border-gray-200 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
            Supported Gyms
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            <div className="text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors grayscale hover:grayscale-0">
              Planet Fitness
            </div>
            <div className="text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors grayscale hover:grayscale-0">
              Gold&apos;s Gym
            </div>
            <div className="text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors grayscale hover:grayscale-0">
              Equinox
            </div>
            <div className="text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors grayscale hover:grayscale-0">
              LA Fitness
            </div>
            <div className="text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors grayscale hover:grayscale-0">
              24 Hour Fitness
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="relative z-10 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-extrabold text-indigo-600 mb-2">Join the Beta</div>
              <div className="text-lg font-semibold text-gray-900">Marketplace Launching Soon</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-extrabold text-indigo-600 mb-2">Secure</div>
              <div className="text-lg font-semibold text-gray-900">Verified Listings Only</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-extrabold text-indigo-600 mb-2">Fast</div>
              <div className="text-lg font-semibold text-gray-900">Quick Connection Process</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Legal Notice Section */}
      <div className="relative z-10 bg-slate-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <LegalNotice />
        </div>
      </div>
    </main>
  );
}
