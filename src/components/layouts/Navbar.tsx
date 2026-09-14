import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-12 md:gap-30 bg-amber-50 dark:bg-gray-900/30 shadow-md p-4 font-normal text-xs sm:text-sm md:text-lg">

      <Link
        className="transition-all active:scale-90 active:opacity-50"
        to="/"
      >
        Home
      </Link>

      <Link
        className="transition-all active:scale-90 active:opacity-50"
        to="/men"
      >
        Men
      </Link>

      <Link
        className="transition-all active:scale-90 active:opacity-50"
        to="/women"
      >
        Women
      </Link>

      <Link
        className="transition-all active:scale-90 active:opacity-50"
        to="/shop"
      >
        Shop
      </Link>

      <Link
        className="transition-all active:scale-90 active:opacity-50"
        to="/products"
      >
        Products
      </Link>

      <Link
        className="transition-all active:scale-90 active:opacity-50"
        to="/about"
      >
        About
      </Link>

    </div>
  );
};

export default Navbar;