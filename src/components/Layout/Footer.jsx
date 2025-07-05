import Logo from "./../../assets/LOGO.png"

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#EAEBF4] text-gray-700 py-5 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-2 gap-8">
        
        <div className="space-y-2">
          <img src={Logo} alt="logo" className="w-24" />
        </div>

        <div className=" text-left">
          <h2 className="font-semibold text-gray-500 text-xs mb-2">Prendre un rdv ?</h2>
          <p className="text-sm" >Rendez vous</p>
        </div>

        <div className="space-y-1 text-left">
          <h2 className="font-semibold text-gray-500 text-xs mb-2">Compagnie</h2>
          <p className="text-sm" >À propos</p>
          <p className="text-sm">Fonctionnalités</p>
          <p className="text-sm">Projets</p>
          <p className="text-sm">Carrières</p>
        </div>

        <div className="space-y-1 text-left">
          <h2 className="font-semibold text-gray-500 text-xs mb-2">Aide</h2>
          <p className="text-sm">Support client</p>
          <p className="text-sm">Termes & Conditions</p>
          <p className="text-sm">Politique de confidentialité</p>
        </div>


      </div>
      <div className="max-w-7xl border-t border-gray-300 mx-auto px-4 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-xs mb-2 md:mb-0">
        &copy; {new Date().getFullYear()} Tous droits réservés | LOCDOC.
        </p>

        <div className="flex space-x-4">
          <a
            href="#"
            className="w-6 h-6 flex items-center justify-center border rounded-full"
          >
            <span className="sr-only">Twitter</span>
            <svg
              className="w-3 h-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          <a
            href="#"
            className="w-6 h-6 flex items-center justify-center border rounded-full"
          >
            <span className="sr-only">Instagram</span>
            <svg
              className="w-3 h-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
