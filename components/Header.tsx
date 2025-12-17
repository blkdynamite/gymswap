import AuthNav from "./auth-nav";
import Logo from "./ui/logo";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex items-center gap-6">
          <a
            href="/list"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            List a Membership
          </a>
          <AuthNav />
        </div>
      </nav>
    </header>
  );
}

