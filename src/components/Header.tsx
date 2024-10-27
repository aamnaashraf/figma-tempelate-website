import { FaShoppingCart, FaHeart, FaUser, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-xl font-bold text-black">cyber</div> {/* Black text for the logo */}

        {/* Search Bar */}
        <div className="flex items-center border rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-64"
          />
          <button className="px-4  flex items-center justify-center">
            <FaSearch className="text-gray-400" />
            </button> {/* Gray search button */}
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a href="#" className="text-black hover:text-blue-600">Home</a> {/* Black text */}
          <a href="#" className="text-black hover:text-blue-600">About us</a>
          <a href="#" className="text-black hover:text-blue-600">Contact us</a>
          <a href="#" className="text-black hover:text-blue-600">Blogs</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <FaHeart className="text-black text-xl" /> {/* Black icons */}
          <FaShoppingCart className="text-black text-xl" />
          <FaUser className="text-black text-xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;