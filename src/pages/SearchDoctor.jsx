import { useState, useEffect } from "react";

// Fonction pour calculer la distance en km entre deux points (Haversine)
function getDistanceKm(lat1, lon1, lat2, lon2) {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Rayon de la Terre en km
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

  // Filtrage personnalisé avec géolocalisation
  const filteredDoctors = doctors
    .map((doc) => {
      const match =
        doc.nom.toLowerCase().includes(filters.nom.toLowerCase()) &&
        doc.prenom.toLowerCase().includes(filters.prenom.toLowerCase()) &&
        doc.specialite.toLowerCase().includes(filters.specialite.toLowerCase()) &&
        doc.ville.toLowerCase().includes(filters.ville.toLowerCase());

      // Si la géolocalisation est active, calculer la distance
      let distance = null;
      if (position) {
        distance = getDistanceKm(position.lat, position.lon, doc.lat, doc.lon);
      }

      return match ? { ...doc, distance } : null;
    })
    .filter(Boolean)
    .sort((a, b) => {
      // Tri par distance si géoloc activée
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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#9898E3] mb-6 text-center">
          Trouver un Médecin
        </h1>

        {/* Formulaire de recherche */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <input
            type="text"
            placeholder="Nom"
            value={filters.nom}
            onChange={(e) => setFilters({ ...filters, nom: e.target.value })}
            className="px-4 py-2 border rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Prénom"
            value={filters.prenom}
            onChange={(e) => setFilters({ ...filters, prenom: e.target.value })}
            className="px-4 py-2 border rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Spécialité"
            value={filters.specialite}
            onChange={(e) => setFilters({ ...filters, specialite: e.target.value })}
            className="px-4 py-2 border rounded-md w-full"
          />
          <input
            type="text"
            placeholder="Ville"
            value={filters.ville}
            onChange={(e) => setFilters({ ...filters, ville: e.target.value })}
            className="px-4 py-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-8">
          <button
            onClick={handleGeolocate}
            className="bg-[#9898E3] text-white px-4 py-2 rounded-md hover:bg-[#7c7cdb] transition"
          >
            Partager ma position
          </button>
          {position && (
            <p className="mt-2 text-sm text-gray-600">
              Position détectée : lat {position.lat.toFixed(4)}, lon {position.lon.toFixed(4)}
            </p>
          )}
        </div>

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
