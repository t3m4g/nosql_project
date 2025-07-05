import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Medecin from "./../assets/MEDECIN.png";
import PatientTestimonials from "../components/PageTestimonials";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-20 w-full">
      {/* Présentation */}
      <section className="bg-gradient-to-b from-[#EAEBF4] to-white py-16 px-6 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Texte */}
          <div className="flex-1 space-y-5 text-left pt-6">
            <div>
              <h1 className="text-4xl font-bold bg-gray-700 bg-clip-text text-transparent">
                Trouvez le bon médecin,
              </h1>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#9898E3] to-[#6CC2A5] bg-clip-text text-transparent">
                Au bon moment
              </h1>
              <h1 className="text-4xl font-bold bg-gray-600 bg-clip-text text-transparent">
                Au bon endroit
              </h1>
            </div>
            <p className="text-sm text-gray-800 max-w-md">
              Recherchez les spécialistes qualifiés proche de vous. Prenez rendez-vous facilement et obtenez les soins dont vous avez besoin.
            </p>
            <button
              className="bg-[#9898E3] text-white text-sm px-6 py-2 rounded-xl hover:bg-[#7c7cdb] transition"
              onClick={() => navigate("/register")}
            >
              Prendre un rendez-vous maintenant
            </button>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src={Medecin}
              alt="Docteur"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Pourquoi choisir LOCDOC */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center mb-8">
          <h2 className="text-2xl font-bold">Pourquoi choisir</h2>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#9898E3] to-[#6CC2A5] bg-clip-text text-transparent ml-2">
            LOCDOC ?
          </h2>
        </div>
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
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#9898E3] to-[#6CC2A5] bg-clip-text text-transparent mr-2">
              Comment
            </h2>
            <h2 className="text-2xl font-bold">ça marche ?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* Nos spécialistes + témoignages */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#9898E3] to-[#6CC2A5] bg-clip-text text-transparent mb-2">
            Prêt à trouver un médecin ?
          </h2>
          <p className="text-xs text-gray-600">
            Rejoignez +100 000 patients qui prennent le contrôle de leurs soins avec LocDoc.
          </p>
        </div>

        <PatientTestimonials />

        <button
          className="mt-6 bg-[#9898E3] text-white text-sm px-6 py-2 rounded-xl hover:bg-[#7c7cdb] transition"
          onClick={() => navigate("/register")}
        >
          Passer à l'action
        </button>
      </section>
    </div>
  );
}

export default Home;
