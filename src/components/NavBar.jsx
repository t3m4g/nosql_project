function NavBar() {
    return (
        <div className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                
                {/* Logo */}
                <div className="text-xl font-bold text-gray-800 px-12">
                    Logo
                </div>

                {/* Menu de navigation */}
                <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <a href="#" className="hover:text-conf-bleu transition duration-300">Accueil</a>
                    <a href="#" className="hover:text-conf-bleu transition duration-300">À propos</a>
                    <a href="#" className="hover:text-conf-bleu transition duration-300">Prendre RDV</a>
                    <a href="#" className="hover:text-conf-bleu transition duration-300">Contact</a>
                </div>

                {/* Boutons utilisateur */}
                <div className="flex space-x-3 px-20">
                    <button className="px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition duration-300">
                        Login
                    </button>
                    <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
                        S'inscrire
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
