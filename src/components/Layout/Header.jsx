import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "./../../assets/LOGO.png";
import { useAuthStore } from "../../store/authStore";

function Header() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className=" top-0 left-0 right-0 bg-[#EAEBF4] shadow-md z-50 px-16">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between space-y-3">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src={Logo} alt="logo" className="w-20 h-15" />
        </div>

        {/* Navigation */}
        <nav className="flex space-x-32 bg-[#f3f3fa] px-4 py-2 rounded-full border border-gray-200">
          <button className="text-sm font-medium text-gray-700 hover:text-[#5F67C7] transition" onClick={() => navigate("/")}>Accueil</button>
          <button className="text-sm font-medium text-gray-700 hover:text-[#5F67C7] transition" onClick={() => navigate("/doctors")}>Trouver un docteur</button>
          <button className="text-sm font-medium text-gray-700 hover:text-[#5F67C7] transition" onClick={() => navigate("/about")}>À propos</button>

          {/* Bouton spécial si medecin */}
          {isAuthenticated && user?.role?.includes("doctor") && (
            <button
              className="text-sm font-medium text-purple-600 hover:text-purple-800 transition"
              onClick={() => navigate("/medecin/rdv")}
            >
              Gérer mes rendez-vous
            </button>
          )}
        </nav>

        {/* Auth buttons */}
        <div className="flex items-center space-x-3">
          {!isAuthenticated ? (
            <>
              <button
                className="flex items-center text-sm text-[#9898E3] hover:text-[#5F67C7] transition"
                onClick={() => navigate("/login")}
              >
                <FaUser className="mr-1 " /> Se connecter
              </button>
              <button
                className="bg-[#9898E3] text-white text-sm px-4 py-2 rounded-xl hover:bg-[#7c7cdb] transition"
                onClick={() => navigate("/register")}
              >
                S'inscrire
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/profile")}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition"
              >
                <FaUser className="mr-1" />
                {user?.name || user?.username}
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white text-sm px-4 py-2 rounded-full hover:bg-red-600 transition"
              >
                Se déconnecter
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
