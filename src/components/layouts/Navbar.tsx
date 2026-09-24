


      import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* ================= NAVIGATION BAR ================= */}
      <div className="bg-[#806b5f] text-white">

        <div className="mx-auto flex min-h-9.5 max-w-350 items-center px-4 sm:px-6 lg:px-8">

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mr-5 flex shrink-0 items-center justify-center"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>


          {/* Desktop Links */}
          <nav className="hidden flex-1 items-center justify-center gap-6 text-[11px] lg:flex xl:gap-10">

            <a href="/" className="transition hover:text-gray-200">
              Home
            </a>

            <a href="/fashion" className="transition hover:text-gray-200">
              Fashion
            </a>

            <a href="/men" className="transition hover:text-gray-200">
              Men
            </a>

            <a href="/women" className="transition hover:text-gray-200">
              Women
            </a>

            <a href="/about" className="transition hover:text-gray-200">
              About Us
            </a>

            <a href="/cosmetics" className="transition hover:text-gray-200">
              Cosmetics
            </a>

            <a href="/shop" className="transition hover:text-gray-200">
              Shop
            </a>

            <a href="/blog" className="transition hover:text-gray-200">
              Blog
            </a>

            <a href="/contact" className="transition hover:text-gray-200">
              Contact Us
            </a>

          </nav>


          {/* Shipping text */}
          <div className="hidden shrink-0 border-l border-white/30 pl-5 text-[9px] xl:block">
            Free shipping for order over $200
          </div>

        </div>


        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <nav className="border-t border-white/20 bg-[#806b5f] lg:hidden">

            <div className="flex flex-col px-6 py-3 text-sm">

              <a
                href="/"
                className="border-b border-white/10 py-3"
              >
                Home
              </a>

              <a
                href="/fashion"
                className="border-b border-white/10 py-3"
              >
                Fashion
              </a>

              <a
                href="/men"
                className="border-b border-white/10 py-3"
              >
                Men
              </a>

              <a
                href="/women"
                className="border-b border-white/10 py-3"
              >
                Women
              </a>

              <a
                href="/about"
                className="border-b border-white/10 py-3"
              >
                About Us
              </a>

              <a
                href="/cosmetics"
                className="border-b border-white/10 py-3"
              >
                Cosmetic
              </a>

              <a
                href="/shop"
                className="border-b border-white/10 py-3"
              >
                Shop
              </a>

              <a
                href="/blog"
                className="border-b border-white/10 py-3"
              >
                Blog
              </a>

              <a
                href="/contact"
                className="py-3"
              >
                Contact Us
              </a>

            </div>

          </nav>
        )}

      </div>

    </header>
  );
}