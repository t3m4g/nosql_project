import Logo from "./../../assets/LOGO.png"

function Footer() {
  return (
    <footer className="w-full text-gray-700 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div className="space-y-4">
          <img src={Logo} alt="logo" className="w-24" />
          <p className="text-sm">Un petit commentaire sur le site web de LOCDOC</p>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold text-lg">Compagnie</h2>
          <p>À propos</p>
          <p>Fonctionnalités</p>
          <p>Projets</p>
          <p>Carrières</p>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold text-lg">Aide</h2>
          <p>Support client</p>
          <p>Termes & Conditions</p>
          <p>Politique de confidentialité</p>
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold text-lg">Restez informé</h2>
          <p className="text-sm">Souscrivez pour recevoir des nouvelles ou nous soutenir</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Votre email"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Souscrire
            </button>
          </form>
        </div>

      </div>
      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} LOCDOC. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
