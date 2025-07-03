import Medecin from "./../assets/MEDECIN.png"

function Home() {
    return (
      <div className="flex flex-col space-y-20">
        
        {/* Section de présentation */}
        <section className="bg-gradient-to-br from-[#9898E3] to-white py-16 px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-white">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#9898E3] to-[#6CC2A5] bg-clip-text text-transparent">
            Bienvenue sur LOCDOC
          </h1>
            <p className="text-lg">Prenez rendez-vous facilement avec des médecins qualifiés près de chez vous.</p>
          </div>
          <div className="flex-1">
            <img
              src={Medecin}
              alt="Docteur"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>
        </section>
  
        {/* Raisons de choisir LOCDOC */}
        <section className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-8">Pourquoi choisir LOCDOC ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Accessibilité</h3>
              <p>Consultez des médecins partout, à tout moment, depuis votre téléphone.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Fiabilité</h3>
              <p>Nos médecins sont certifiés et bien évalués par les patients.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Simplicité</h3>
              <p>En quelques clics, vous prenez rendez-vous sans attendre.</p>
            </div>
          </div>
        </section>
  
        {/* Comment ça marche */}
        <section className="bg-gray-100 py-16 px-6 text-center">
          <h2 className="text-2xl font-bold mb-10">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">1. Choisir votre localisation</h3>
              <p>Sélectionnez une zone proche de vous pour filtrer les médecins disponibles.</p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">2. Trouver un médecin</h3>
              <p>Consultez les profils et disponibilités des médecins dans votre région.</p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">3. Prendre rendez-vous</h3>
              <p>Réservez une consultation en ligne en quelques secondes.</p>
            </div>
          </div>
        </section>
  
        {/* Nos spécialistes */}
        <section className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-10">Nos spécialistes de référence</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <img src="/medecin1.jpg" alt="Spécialiste 1" className="rounded-lg shadow-md object-cover h-64 w-full" />
            <img src="/medecin2.jpg" alt="Spécialiste 2" className="rounded-lg shadow-md object-cover h-64 w-full" />
            <img src="/medecin3.jpg" alt="Spécialiste 3" className="rounded-lg shadow-md object-cover h-64 w-full" />
          </div>
        </section>
  
      </div>
    );
  }
  
export default Home;
  