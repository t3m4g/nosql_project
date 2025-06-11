import React from "react";
import doctorImg from "../assets/doctor.png"; // remplace avec ton image réelle
import statImg from "../assets/stat.png";
import profileImg from "../assets/profil.jpg";
import syringeImg from "../assets/syringe.jpg";

function Index() {
  return (
    <div className="flex flex-col space-y-24">
      {/* Section 1 : Intro & Image centrale */}
      <section className="bg-conf-bleu py-16 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Réseaux sociaux verticaux */}
        <div className="flex flex-col items-center space-y-4 relative">
          <div className="w-px h-6 bg-white" />
          <div className="space-y-4 flex flex-col items-center">
            <a href="#">
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            </a>
            <a href="#">
            <span className="sr-only">Instagram</span>
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            </a>
            <a href="#">
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
          <div className="w-px h-6 bg-white" />
        </div>

        {/* Texte d'accroche */}
        <div className="text-center lg:text-left max-w-xl">
          <p className="text-sm uppercase text-blue-800 font-medium mb-2">Creating a better tomorrow</p>
          <h2 className="text-3xl font-bold mb-4">
            Trouvez un spécialiste près de chez vous pour prendre soin de vous
          </h2>
          <div className="text-white text-md space-y-2">
            <p>Credibly maintain stand manufactured products nt-focused portals.</p>
            <p>Collaboratively negotiate web-enabled web services.</p>
          </div>
        </div>

        {/* Images à droite */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <img src={doctorImg} alt="Médecin" className="bg-white w-80 h-auto rounded-full shadow-xl z-10" />
          <div className="absolute top-4 left-4">
            <img src={statImg} alt="Stat" className="w-24 h-12 rounded-lg border" />
          </div>
          <div className="absolute top-4 right-4">
            <img src={profileImg} alt="Profile" className="w-16 h-16 rounded-full border" />
          </div>
          <div className="absolute bottom-4 right-8">
            <img src={syringeImg} alt="Syringe" className="w-16 h-16 rounded-full border" />
          </div>
        </div>
      </section>

      {/* Section 2 : Nos spécialités */}
      <section className="px-6 md:px-12 text-center space-y-10">
        <div>
            <p className="text-sm text-blue-800 uppercase font-medium">Creating a better tomorrow</p>
            <h2 className="text-3xl font-bold">Quelles sont nos spécialités ?</h2>
        </div>
        <div className="px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Carte spécialité */}
          {["Pédiatrie", "Cardiologie", "Neurologie", "Dermatologie"].map((specialty, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="font-semibold text-lg">{specialty}</h3>
              <p className="text-sm text-gray-600 mt-2">Description courte</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 : Rencontrer les docteurs */}
      <section className="bg-gray-50 p-12 md:px-12 space-y-8">
        <div className="px-12 flex justify-between items-center flex-col md:flex-row">
          <div>
            <p className="text-sm text-blue-800 uppercase font-medium">Creating a better tomorrow</p>
            <h2 className="text-3xl font-bold">Rencontrez nos docteurs</h2>
          </div>
          <button className="mt-4 md:mt-0 px-4 py-2 bg-conf-vert text-white rounded-lg hover:bg-green-700">
            En savoir plus
          </button>
        </div>

        <div className="grid px-12 py-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-md text-center">
              <img src={profileImg} alt={`Docteur ${i}`} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h4 className="font-semibold text-lg">Dr. Nom Prénom</h4>
              <p className="text-sm text-gray-500">Spécialité</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 : Citation docteur */}
      <section className="px-6 md:px-12 text-center space-y-6">
        <p className="text-sm text-blue-800 uppercase font-medium">Creating a better tomorrow</p>
        <h2 className="text-3xl font-bold">Paroles de nos docteurs</h2>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
            <img src={profileImg} alt="Médecin" className="w-full h-full object-cover" />
          </div>
          <div className="py-12 flex items-center space-x-2 text-gray-700">
            <div className="w-4 h-4 rounded-full bg-gray-300" />
            <p className="italic max-w-lg">
              “Notre mission est de garantir à chaque patient une prise en charge humaine, moderne et accessible.”
            </p>
            <div className="w-4 h-4 rounded-full bg-gray-300" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
