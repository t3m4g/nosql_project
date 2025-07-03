import MedecinProfile from "./../assets/femme.png";
import MedecinBanniere from "./../assets/Frame 35.png";
import { FaStar } from "react-icons/fa";

function DoctorProfile() {
  const doctor = {
    firstName: "Jean",
    lastName: "Kouassi",
    email: "jean.kouassi@locdoc.com",
    telephone: "0102030405",
    specialties: ["Cardiologie", "Médecine générale"],
    description:
      "Cardiologue expérimenté avec 10 ans de pratique hospitalière. Passionné par l’accompagnement des patients.",
    rating: 4.5,
    avisCount: 36,
    experience: 10,
    disponibilite: {
      lundi: {
        available: true,
        morning: { start: "09:00", end: "12:00" },
        afternoon: { start: "14:00", end: "17:00" },
      },
      mardi: { available: false, morning: {}, afternoon: {} },
      mercredi: {
        available: true,
        morning: { start: "08:30", end: "12:00" },
        afternoon: { start: "13:30", end: "16:30" },
      },
      jeudi: {
        available: true,
        morning: { start: "09:00", end: "12:00" },
        afternoon: { start: "15:00", end: "18:00" },
      },
      vendredi: { available: false, morning: {}, afternoon: {} },
      samedi: {
        available: true,
        morning: { start: "09:00", end: "12:00" },
        afternoon: { start: "14:00", end: "16:00" },
      },
      dimanche: { available: false, morning: {}, afternoon: {} },
    },
  };

  const jours = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche",
  ];

  return (
    <div className="max-w-6xl mx-auto px-1 py-1">
      {/* Section image */}
      <div className="relative mb-28">
        <img
          src={MedecinBanniere}
          alt="Bannière"
          className="w-full h-72 object-cover rounded-b-2xl"
        />
        <img
          src={MedecinProfile}
          alt="Profil"
          className="absolute top-48 left-8 w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
        />

        {/* Carte info docteur */}
        <div className="absolute top-48 left-52 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xl">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#9898E3] to-[#6CC2A5] bg-clip-text text-transparent mb-2">
            Dr {doctor.lastName} {doctor.firstName}
          </h1>
          <p className="text-sm text-gray-700 mb-4">
            {doctor.specialties.join(" • ")}
          </p>

          <div className="flex gap-6 text-center">
            <div>
              <p className="text-xl font-bold text-yellow-500 flex justify-center items-center gap-1">
                {doctor.rating} <FaStar />
              </p>
              <p className="text-xs text-gray-500">Note</p>
            </div>
            <div>
              <p className="text-xl font-bold">{doctor.experience} ans</p>
              <p className="text-xs text-gray-500">Expérience</p>
            </div>
            <div>
              <p className="text-xl font-bold">{doctor.avisCount}</p>
              <p className="text-xs text-gray-500">Avis</p>
            </div>
          </div>
        </div>
      </div>

      {/* À propos */}
      <section className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-bold text-[#9898E3] mb-2">À propos</h2>
        <p className="text-gray-700">{doctor.description}</p>
      </section>

      {/* Disponibilités */}
      <section className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-bold text-[#9898E3] mb-4">Horaires de disponibilité</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jours.map((jour) => {
            const dispo = doctor.disponibilite[jour];
            return (
              <div
                key={jour}
                className={`p-4 rounded-lg shadow ${
                  dispo.available
                    ? "bg-green-50"
                    : "bg-gray-200 text-gray-500 italic"
                }`}
              >
                <h3 className="capitalize text-lg font-semibold mb-1">
                  {jour}
                </h3>
                {dispo.available ? (
                  <>
                    <p className="text-sm">
                      <strong>Matin :</strong> {dispo.morning.start} -{" "}
                      {dispo.morning.end}
                    </p>
                    <p className="text-sm mt-1">
                      <strong>Après-midi :</strong> {dispo.afternoon.start} -{" "}
                      {dispo.afternoon.end}
                    </p>
                  </>
                ) : (
                  <p>Indisponible</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Avis */}
      <section className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-bold text-[#9898E3] mb-4">Avis patients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="p-4 border rounded-lg bg-gray-50 shadow-sm"
            >
              <p className="italic text-sm">
                “Très bon médecin, à l’écoute et très professionnel.”
              </p>
              <p className="mt-2 text-sm text-gray-600">— Patient anonyme</p>
            </div>
          ))}
        </div>
      </section>

      {/* Actions */}
      <div className="flex justify-center gap-6 mt-6">
        <button className="bg-[#9898E3] hover:bg-[#7c7cdb] text-white px-6 py-2 rounded-lg transition">
          Prendre RDV
        </button>
        <button className="border border-[#9898E3] text-[#9898E3] hover:bg-[#f2f2ff] px-6 py-2 rounded-lg transition">
          Donner mon avis
        </button>
      </div>
    </div>
  );
}

export default DoctorProfile;
