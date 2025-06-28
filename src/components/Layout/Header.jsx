import { FaUser } from "react-icons/fa";
import Logo from "./../../assets/LOGO.png"

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#EAEBF4] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between space-y-3">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="logo" className="w-20 h-15" />
        </div>

        {/* Navigation */}
        <nav className="flex space-x-4 bg-[#f3f3fa] px-4 py-2 rounded-full border border-gray-200">
          <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">Accueil</button>
          <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">Trouver un docteur</button>
          <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">À propos</button>
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center space-x-3">
          <button className="flex items-center text-sm text-gray-700 hover:text-blue-600 transition">
            <FaUser className="mr-1" /> Se connecter
          </button>
          <button className="bg-[#9898E3] text-white text-sm px-4 py-2 rounded-full hover:bg-[#7c7cdb] transition">
            S'inscrire
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;
