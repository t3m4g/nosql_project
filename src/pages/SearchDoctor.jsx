import { useState, useEffect } from "react";

function getDistanceKm(lat1, lon1, lat2, lon2) {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function SearchDoctor() {
  const [filters, setFilters] = useState({
    nom: "",
    prenom: "",
    specialite: "",
    ville: "",
  });
  const [position, setPosition] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const [doctors] = useState([
    {
      id: 1,
      nom: "YENONMON",
      prenom: "Gbèto",
      specialite: "Cardiologie",
      ville: "Cotonou",
      lat: 6.3703,
      lon: 2.3912,
      description: "Cardiologue expérimenté avec 10 ans de pratique",
    },
    {
      id: 2,
      nom: "KOUASSI",
      prenom: "Jean",
      specialite: "Pédiatrie",
      ville: "Porto-Novo",
      lat: 6.4969,
      lon: 2.6221,
      description: "Pédiatre spécialisé dans les soins aux nourrissons",
    },
    {
      id: 3,
      nom: "AHOUANSOU",
      prenom: "Justine",
      specialite: "Gynécologie",
      ville: "Abomey-Calavi",
      lat: 6.4483,
      lon: 2.3556,
      description: "Experte en santé féminine depuis 15 ans",
    },
  ]);

  const filteredDoctors = doctors
    .map((doc) => {
      const match =
        doc.nom.toLowerCase().includes(filters.nom.toLowerCase()) &&
        doc.prenom.toLowerCase().includes(filters.prenom.toLowerCase()) &&
        doc.specialite.toLowerCase().includes(filters.specialite.toLowerCase()) &&
        doc.ville.toLowerCase().includes(filters.ville.toLowerCase());

      let distance = null;
      if (position) {
        distance = getDistanceKm(position.lat, position.lon, doc.lat, doc.lon);
      }

      return match ? { ...doc, distance } : null;
    })
    .filter(Boolean)
    .sort((a, b) => {
      if (position && a.distance != null && b.distance != null) {
        return a.distance - b.distance;
      }
      return 0;
    });

  const handleGeolocate = () => {
    if (!navigator.geolocation) {
      alert("La géolocalisation n'est pas supportée par votre navigateur.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      },
      (err) => {
        console.error(err);
        alert("Impossible d'obtenir votre position.");
      }
    );
  };

  const handleClearFilters = () => {
    setFilters({ nom: "", prenom: "", specialite: "", ville: "" });
    setPosition(null);
  };

  const specialites = [...new Set(doctors.map((doc) => doc.specialite))];
  const villes = [...new Set(doctors.map((doc) => doc.ville))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EAEBF4] to-white pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-left">
          <h1 className="text-4xl bg-gradient-to-r from-[#9898E3] to-[#6CC2A5] bg-clip-text text-transparent font-bold mb-2">
            Trouver un Médecin
          </h1>
          <p className="text-xs text-gray-800 mb-12">
            Rechercher un médecin tout près de chez vous. Et consulter son profil
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="bg-white rounded-2xl shadow p-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-left">Recherche et Filtre</h2>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 flex-wrap">
            <div className="flex flex-1 gap-4 items-center">
              {/* Input recherche */}
              <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Rechercher par nom, par prenoms et par spécialité"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9898E3]"
                  value={filters.nom}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      nom: e.target.value,
                      specialite: e.target.value,
                    })
                  }
                />
              </div>

              {/* Bouton filtres */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 bg-[#9898E3] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#7c7cdb] transition"
                  onClick={() => setShowFilterModal(true)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                  </svg>
                  Filtres
                </button>

                {(filters.specialite || filters.ville) && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                )}
              </div>
            </div>

            {/* Effacer les filtres */}
            {(filters.specialite || filters.ville) && (
              <div>
                <button
                  onClick={handleClearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-[#9898E3] border border-gray-300 rounded-lg bg-gray-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Effacer les filtres
                </button>
              </div>
            )}
          </div>
        </div>


        {/* Modale */}
        {showFilterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg space-y-4">
              <div className="text-left" >
                <h3 className="text-lg font-semibold">Filtres Avancés</h3>
                <p className="text-xs text-gray-500 mb-4">
                  Afiner vos recherches...
                </p>
              </div>

              <div className="text-left" >
                <p className="text-gray-600 text-sm mb-2" >Specialité</p>
                <select
                  className="w-full border border-gray-300 bg-white p-2 rounded mb-2"
                  value={filters.specialite}
                  onChange={(e) => setFilters({ ...filters, specialite: e.target.value })}
                  >
                  <option value="">Toutes spécialités</option>
                  {specialites.map((sp) => (
                    <option key={sp} value={sp}>{sp}</option>
                  ))}
                </select>
              </div>

              <div className="text-left" >
                <p className="text-gray-600 text-sm mb-2" >Ville</p>
                <select
                  className="w-full border border-gray-300 bg-white p-2 rounded mb-2"
                  value={filters.ville}
                  onChange={(e) => setFilters({ ...filters, ville: e.target.value })}
                >
                  <option value="">Toutes les villes</option>
                  {villes.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>


              <button
                className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => {
                  handleGeolocate();
                  setShowFilterModal(false);
                }}
              >
                Utiliser ma position
              </button>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowFilterModal(false)}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-[#9898E3]"
                >
                  Annuler
                </button>
                <button
                  className="flex items-center gap-2 bg-[#9898E3] text-white text-sm px-4 py-2 hover:bg-[#7c7cdb] transition"
                  onClick={() => setShowFilterModal(false)}
                >
                  Appliquer
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Liste des médecins */}
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doc) => (
              <div key={doc.id} className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-xl font-bold text-[#4b4ba9]">{doc.nom} {doc.prenom}</h2>
                <p className="text-sm text-gray-500 mb-1">{doc.specialite} – {doc.ville}</p>
                <p className="text-gray-700 text-sm">{doc.description}</p>
                {position && doc.distance != null && (
                  <p className="mt-2 text-sm text-green-600 font-medium">
                    À environ {doc.distance.toFixed(1)} km de votre position
                  </p>
                )}
                <button className="mt-4 bg-[#9898E3] text-white px-4 py-2 rounded-md hover:bg-[#7a7ad2] transition">
                  Prendre rendez-vous
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Aucun médecin trouvé.</p>
        )}
      </div>
    </div>
  );
}

export default SearchDoctor;
