import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gray-400">
              Stay in the loop
            </p>

            <h2 className="text-2xl font-light sm:text-3xl">
              Get 10% off your first order.
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Subscribe for new arrivals, exclusive offers, and more.
            </p>
          </div>

          <form
            className="flex w-full max-w-md border-b border-white/50 pb-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              required
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
            />

            <button
              type="submit"
              className="shrink-0 text-xs font-medium uppercase tracking-widest transition-colors hover:text-gray-400"
            >
              Subscribe →
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4 lg:px-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link
            to="/"
            className="text-3xl font-semibold tracking-[0.25em]"
          >
            OLIVIA
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
            Discover timeless fashion and everyday beauty. Find your style
            with pieces made to inspire confidence.
          </p>

          <div className="mt-6 flex gap-5 text-sm">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-gray-400"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="transition-colors hover:text-gray-400"
            >
              Facebook
            </a>

            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
              className="transition-colors hover:text-gray-400"
            >
              Pinterest
            </a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]">
            Shop
          </h3>

          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link to="/fashion" className="transition-colors hover:text-white">
                Fashion
              </Link>
            </li>

            <li>
              <Link to="/men" className="transition-colors hover:text-white">
                Men
              </Link>
            </li>

            <li>
              <Link to="/women" className="transition-colors hover:text-white">
                Women
              </Link>
            </li>

            <li>
              <Link to="/cosmetics" className="transition-colors hover:text-white">
                Cosmetics
              </Link>
            </li>

            <li>
              <Link to="/products" className="transition-colors hover:text-white">
                All Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]">
            Customer Care
          </h3>

          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link to="/contact" className="transition-colors hover:text-white">
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="/about" className="transition-colors hover:text-white">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/blog" className="transition-colors hover:text-white">
                Our Blog
              </Link>
            </li>

            <li>
              <Link to="/shop" className="transition-colors hover:text-white">
                Shopping
              </Link>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]">
            Need Help?
          </h3>

          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <a href="mailto:support@example.com" className="transition-colors hover:text-white">
                Email Support
              </a>
            </li>

            <li>
              <Link to="/contact" className="transition-colors hover:text-white">
                FAQs & Support
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition-colors hover:text-white">
                Shipping Information
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition-colors hover:text-white">
                Returns & Exchanges
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <p>© {new Date().getFullYear()} OLIVIA. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition-colors hover:text-white">
              Terms & Conditions
            </a>
          </div>

          <p>Designed with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;