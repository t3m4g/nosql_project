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
  const [selectedPeriod, setSelectedPeriod] = useState("");

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
      lundi: [
        { horaire: "08:00 - 12:00", places: 2 },
        { horaire: "15:30 - 17:30", places: 1 },
      ],
      mardi: [
        { horaire: "09:00 - 11:00", places: 1 },
        { horaire: "14:00 - 15:00", places: 2 },
      ],
      mercredi: [
        { horaire: "08:30 - 10:00", places: 0 },
        { horaire: "13:00 - 15:00", places: 3 },
      ],
      jeudi: [],
      vendredi: [
        { horaire: "10:00 - 12:00", places: 1 },
        { horaire: "15:00 - 17:00", places: 2 },
      ],
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
      <div className="relative mb-28">
        <img src={MedecinBanniere} alt="Bannière" className="w-full h-72 object-cover rounded-b-2xl" />
        <img src={MedecinProfile} alt="Profil" className="absolute top-48 left-8 w-40 h-40 object-cover rounded-full border-4 border-white shadow-md" />

        <div className="absolute top-48 left-52 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xl">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#9898E3] to-[#6CC2A5] bg-clip-text text-transparent mb-2">
            Dr {doctor.lastName} {doctor.firstName}
          </h1>
          <p className="text-sm text-gray-700 mb-4">{doctor.specialties.join(" • ")}</p>

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

      <section className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-bold text-[#9898E3] mb-2">À propos</h2>
        <p className="text-gray-700">{doctor.description}</p>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-bold text-[#9898E3] mb-4">Avis patients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="p-4 border rounded-lg bg-gray-50 shadow-sm">
              <p className="italic text-sm">“Très bon médecin, à l’écoute et très professionnel.”</p>
              <p className="mt-2 text-sm text-gray-600">— Patient anonyme</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-center gap-6 mb-12">
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

      {showReservation && (
        <section className="space-y-6 mb-12">
          <div className="text-left" >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#9898E3] to-[#6CC2A5] bg-clip-text text-transparent mb-2">
              Reservation de rendez vous
            </h2>
          </div>
          {/* Ligne du haut : Contact + Calendrier + Créneaux */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Contact */}
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
                  setSelectedSlot("");
                  setSelectedPeriod("");
                  const jour = date.toLocaleDateString('fr-FR', { weekday: 'long' });
                  setSelectedDay(jour);
                }}
                value={selectedDate}
                tileClassName={getTileClassName}
                className="w-full"
                locale="fr-FR"
              />
            </div>
        
            {/* Créneaux */}
            <div className="bg-white p-4 rounded-xl shadow">
              {selectedDay && doctor.disponibilite[selectedDay] && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2 text-[#9898E3] mb-6 ">
                    Disponibilités le <span className="capitalize">{selectedDay}</span>
                  </h2>
        
                  {doctor.disponibilite[selectedDay].length === 0 ? (
                    <p className="text-sm text-gray-500 italic">Aucun créneau disponible ce jour-là.</p>
                  ) : (
                    (() => {
                      const morningSlots = doctor.disponibilite[selectedDay].filter(slot => parseInt(slot.horaire.split(":")[0]) < 12);
                      const afternoonSlots = doctor.disponibilite[selectedDay].filter(slot => parseInt(slot.horaire.split(":")[0]) >= 12);
        
                      return (
                        <div className="flex gap-4">
                          <div
                            className="bg-gray-50 p-4 rounded-xl shadow w-2/5 cursor-pointer"
                            onClick={() => setSelectedPeriod("morning")}
                          >
                            <h3 className="text-md font-semibold text-gray-700">🕘 Matin</h3>
                            <p className="text-sm text-gray-600">
                              {morningSlots.length > 0
                                ? `${morningSlots.length} créneau${morningSlots.length > 1 ? "x" : ""} disponible${morningSlots.length > 1 ? "s" : ""}`
                                : "Aucun créneau disponible"}
                            </p>
                          </div>
                          <div
                            className="bg-gray-50 p-4 rounded-xl shadow w-3/5 cursor-pointer"
                            onClick={() => setSelectedPeriod("afternoon")}
                          >
                            <h3 className="text-md font-semibold text-gray-700">🌞 Après-midi</h3>
                            <p className="text-sm text-gray-600">
                              {afternoonSlots.length > 0
                                ? `${afternoonSlots.length} créneau${afternoonSlots.length > 1 ? "x" : ""} disponible${afternoonSlots.length > 1 ? "s" : ""}`
                                : "Aucun créneau disponible"}
                            </p>
                          </div>
                        </div>
                      );
                    })()
                  )}
                </div>
              )}
        
              {/* Créneaux détaillés */}
              {selectedDay && selectedPeriod && (
                <div className="flex flex-wrap gap-3 justify-center mt-4">
                  {doctor.disponibilite[selectedDay]
                    .filter(slot =>
                      selectedPeriod === "morning"
                        ? parseInt(slot.horaire.split(":")[0]) < 12
                        : parseInt(slot.horaire.split(":")[0]) >= 12
                    )
                    .map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSlot(slot.horaire)}
                        disabled={slot.places === 0}
                        className={`px-8 py-12 rounded-lg border w-4/5 text-sm font-medium ${
                          selectedSlot === slot.horaire
                            ? "bg-green-600 text-white"
                            : slot.places === 0
                            ? "bg-red-100 text-red-500 cursor-not-allowed"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        {slot.horaire} ({slot.places} place{slot.places > 1 ? "s" : ""})
                      </button>
                    ))}
                </div>
              )}
            </div>
          </div>
        
          {/* Ligne du bas : Description + Bouton */}
          <div className="flex flex-col items-center md:flex-row gap-6">
            <div className="bg-white w-full text-left md:w-9/12 px-4 py-3 rounded-xl shadow-md mr-6 ml-2">
              <label htmlFor="description" className="block text-lg font-semibold text-[#9898E3] mb-4">
                Description
              </label>
              <textarea
                id="description"
                rows="3"
                placeholder="Décrivez brièvement le motif du rendez-vous..."
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#9898E3] resize-none"
              ></textarea>
            </div>
        
            {selectedSlot && (
              <div className="flex items-end md:mt-0">
                <button
                  onClick={() => alert("Rendez-vous confirmé !")}
                  className="bg-[#9898E3] hover:bg-[#7a7ad2] text-white px-6 py-4 rounded-xl text-xs transition"
                >
                  Reserver mon rendez-vous
                </button>
              </div>
            )}
          </div>
        </section>
      
      )}
    </div>
  );
}

export default DoctorProfile;
