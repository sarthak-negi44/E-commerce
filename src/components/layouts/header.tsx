
import {Search, Heart, User, ShoppingCart} from 'lucide-react'
import Navbar from './Navbar';
//import logo from '../../assets/logos.jpeg'
import { useSearch } from '../../context/searContext';
const Header = () => {
  const { search, setSearch } = useSearch();

  return (
    <>
    <header className="flex items-center justify-between px-3 sm:px-30 bg-amber-50 dark:bg-gray-900/30  shadow-md p-4 position: sticky top-0 z-50">
  
  {/* Search */}
  <div className="flex items-center w-40 sm:w-60 md:w-72  transition-all active:scale-90 active:opacity-50">
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search..."
      className="w-full h-9 sm:h-10 rounded-full bg-gray-100 px-3 outline-none"
    />
    <Search className=" right-1 top-2.5 text-gray-500 w-8 h-8 sm:w-8 sm:h-8 -ml-8 transition-all duration-150 active:scale-75 active:opacity-0 " />
  </div>

  {/* Logo */}
   {/* <img src={logo} alt="OLIVA" className="w-20 sm:w-28 md:w-32 bg-amber-500" />  */}

  {/* Icons */}
  <div className="flex items-center gap-2 sm:gap-4 sm:-mr-20">
    <Heart className="w-5 h-5 sm:w-6 sm:h-6 transition-all active:scale-90 active:opacity-50" />
    <User className="w-5 h-5 sm:w-6 sm:h-6 transition-all active:scale-90 active:opacity-50" />
    <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 transition-all active:scale-90 active:opacity-50" />
  </div>

</header>

<Navbar />
    </>
  )
}

export default Header
    