
import Navbar from "./Navbar";
import { useSearch } from "../../context/searContext";
export default function Header() {
  
  const { search, setSearch } = useSearch();
  return (
    <header className="w-full bg-white">
      {/* ================= TOP BAR ================= */}
      <div className="mx-auto flex h-16.25 w-full max-w-350 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Search */}
        <div className="flex w-45 items-center rounded-full border border-gray-200 bg-white px-3 py-1.5 sm:w-55 md:w-65">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="min-w-0 flex-1 bg-transparent text-[11px] outline-none placeholder:text-gray-400 sm:text-xs"
          />

          <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#806b5f] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-3.5 w-3.5"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <a
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-[20px] font-semibold tracking-[2px] text-[#4b4542] sm:text-[24px] md:text-[28px]"
        >
          OLIVIA
        </a>

        {/* Right Icons */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Wishlist */}
          <button className="text-gray-700 transition hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-4 w-4 sm:h-5 sm:w-5"
            >
              <path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.3Z" />
            </svg>
          </button>

          {/* User */}
          <button className="text-gray-700 transition hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-4 w-4 sm:h-5 sm:w-5"
            >
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 21c.7-4 3-6 7-6s6.3 2 7 6" />
            </svg>
          </button>

          {/* Cart */}
          <button className="relative text-gray-700 transition hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-4 w-4 sm:h-5 sm:w-5"
            >
              <path d="M3 4h2l2 12h10l3-9H6" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>

            <span className="absolute -right-2 -top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#806b5f] text-[8px] text-white">
              0
            </span>
          </button>
        </div>
      </div>

      <Navbar />
    </header>
  );
}
    