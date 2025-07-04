import MedecinProfile from "./../assets/femme.png";
import MedecinBanniere from "./../assets/Frame 35.png";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function DoctorProfile() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showReservation, setShowReservation] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

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
        matin: [
          { horaire: "08:00 - 12:00", places: 2 },
        ],
        apres_midi: [
          { horaire: "15:30 - 17:30", places: 0 },
        ]
      },
      mercredi: {
        matin: [],
        apres_midi: [
          { horaire: "14:00 - 15:00", places: 3 },
        ]
      },
      jeudi: {
        matin: [],
        apres_midi: []
      }
    },
  };

  const joursDispo = Object.entries(doctor.disponibilite)
    .filter(([_, dispo]) => dispo.length > 0)
    .map(([jour]) => jour);

  const getTileClassName = ({ date }) => {
    const jour = date.toLocaleDateString('fr-FR', { weekday: 'long' });
    return joursDispo.includes(jour) ? 'bg-green-100 text-green-700' : 'text-gray-400';
  };

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

      {/* Bouton Prendre RDV */}
      <div className="flex justify-center gap-6 mb-6">
        <button
          className="bg-[#9898E3] hover:bg-[#7c7cdb] text-white px-6 py-2 rounded-lg transition"
          onClick={() => setShowReservation(true)}
        >
          Prendre RDV
        </button>
        <button className="border border-[#9898E3] text-[#9898E3] hover:bg-[#f2f2ff] px-6 py-2 rounded-lg transition">
          Donner mon avis
        </button>
      </div>

      {/* Section Réservation */}
      {showReservation && (
        <div>
          <h2 className="text-2xl text-left font-bold bg-gradient-to-r from-[#9898E3] to-[#6CC2A5] bg-clip-text text-transparent mb-2">
            Reserver un rendez-vous
          </h2>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {/* Carte Info */}
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="text-xl font-bold text-[#9898E3] mb-2">Contact</h3>
              <p><strong>Email:</strong> {doctor.email}</p>
              <p><strong>Téléphone:</strong> {doctor.telephone}</p>
              <p><strong>Spécialités:</strong> {doctor.specialties.join(", ")}</p>
            </div>

            {/* Calendrier */}
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="text-xl font-bold text-[#9898E3] mb-4">Choisir une date</h3>
              <Calendar
                onChange={(date) => {
                  setSelectedDate(date);
                  const day = date.toLocaleDateString("fr-FR", { weekday: "long" });
                  setSelectedDay(day);
                  setSelectedSlot("");
                }}
                value={selectedDate}
                tileClassName={getTileClassName}
                className="w-full"
                locale="fr-FR"
              />
            </div>

            {/* Créneaux + Description */}
            <div className="bg-white p-4 rounded-xl shadow">
              {/* Disponibilité du médecin */}
              {doctor && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2 text-[#4b4ba9]">
                    Disponibilités du jour sélectionné
                  </h2>
                </div>
              )}

              {/* Choix du créneau */}
              {selectedDay && doctor && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-700">
                    Créneaux disponibles le <span className="capitalize">{selectedDay}</span> :
                  </h3>

                  {/* Matin */}
                  <div className="mb-4">
                    <h4 className="text-md font-bold text-[#9898E3] mb-2">Matin</h4>
                    {doctor.disponibilite[selectedDay]?.matin.length > 0 ? (
                      <div className="flex flex-wrap gap-3">
                        {doctor.disponibilite[selectedDay].matin.map((slot, index) => (
                          <div key={index} className="bg-gray-50 border rounded-lg p-3 w-fit"
                          onClick={() => setSelectedSlot(slot.horaire)}
                          >
                            <p className="text-sm font-medium">{slot.horaire}</p>
                            <p className="text-xs text-gray-600">
                              {slot.places} place{slot.places > 1 ? "s" : ""}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 italic">Aucun créneau disponible le matin.</p>
                    )}
                  </div>

                  {/* Après-midi */}
                  <div>
                    <h4 className="text-md font-bold text-[#9898E3] mb-2">Après-midi</h4>
                    {doctor.disponibilite[selectedDay]?.apres_midi.length > 0 ? (
                      <div className="flex flex-wrap gap-3">
                        {doctor.disponibilite[selectedDay].apres_midi.map((slot, index) => (
                          <div key={index} className="bg-gray-50 border rounded-lg p-3 w-fit"
                          onClick={() => setSelectedSlot(slot.horaire)}
                          >
                            <p className="text-sm font-medium">{slot.horaire}</p>
                            <p className="text-xs text-gray-600">
                              {slot.places} place{slot.places > 1 ? "s" : ""}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 italic">Aucun créneau disponible l’après-midi.</p>
                    )}
                  </div>
                </div>
              )}

            </div>
          </section>

          {/* Bouton de confirmation */}
          {selectedSlot && (
            <div className="text-center mt-6">
              <button
                onClick={() => alert("Rendez-vous confirmé !")}
                className="bg-[#9898E3] hover:bg-[#7a7ad2] text-white px-6 py-2 rounded-md text-lg transition"
              >
                Confirmer le rendez-vous
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DoctorProfile;
