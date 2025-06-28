import { useState } from "react";

function PrendreRdv() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const doctors = [
    {
      id: 1,
      name: "Dr. Gbèto YENONMON",
      specialty: "Cardiologue",
      disponibilite: {
        lundi: [
          { horaire: "09:00", places: 2 },
          { horaire: "10:00", places: 1 },
        ],
        mardi: [
          { horaire: "14:00", places: 3 },
          { horaire: "15:00", places: 0 },
        ],
        mercredi: [],
      },
    },
    {
      id: 2,
      name: "Dr. Justine AHOUANSOU",
      specialty: "Gynécologue",
      disponibilite: {
        lundi: [{ horaire: "11:00", places: 2 }],
        jeudi: [
          { horaire: "10:00", places: 1 },
          { horaire: "11:30", places: 0 },
        ],
        vendredi: [],
      },
    },
  ];

  const handleDoctorChange = (e) => {
    const doctorId = parseInt(e.target.value);
    const doctor = doctors.find((doc) => doc.id === doctorId);
    setSelectedDoctor(doctor);
    setSelectedDay("");
    setSelectedSlot("");
  };

  const handleConfirm = () => {
    if (selectedDoctor && selectedDay && selectedSlot) {
      alert(`RDV confirmé avec ${selectedDoctor.name} le ${selectedDay} à ${selectedSlot}`);
    }
  };

  return (
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold text-center text-[#9898E3] mb-8">Prendre un Rendez-vous</h1>

        {/* Sélection du docteur */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">Choisissez un médecin :</label>
          <select
            onChange={handleDoctorChange}
            className="w-full px-4 py-2 border rounded-md"
            defaultValue=""
          >
            <option value="" disabled>-- Sélectionnez --</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name} — {doc.specialty}
              </option>
            ))}
          </select>
        </div>

        {/* Disponibilité du médecin */}
        {selectedDoctor && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-[#4b4ba9]">Disponibilités de {selectedDoctor.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(selectedDoctor.disponibilite).map(([day, slots]) => (
                <button
                  key={day}
                  onClick={() => {
                    setSelectedDay(day);
                    setSelectedSlot("");
                  }}
                  className={`px-4 py-2 rounded-md border ${
                    selectedDay === day
                      ? "bg-[#9898E3] text-white"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  {day} ({slots.length} créneau{slots.length > 1 ? "x" : ""})
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Choix du créneau */}
        {selectedDay && selectedDoctor && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Créneaux disponibles le <span className="capitalize">{selectedDay}</span> :
            </h3>
            <div className="flex flex-wrap gap-3">
              {selectedDoctor.disponibilite[selectedDay].length === 0 ? (
                <p className="text-sm text-gray-500">Aucun créneau disponible ce jour-là.</p>
              ) : (
                selectedDoctor.disponibilite[selectedDay].map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSlot(slot.horaire)}
                    disabled={slot.places === 0}
                    className={`px-4 py-2 rounded-md border ${
                      selectedSlot === slot.horaire
                        ? "bg-green-600 text-white"
                        : slot.places === 0
                        ? "bg-red-100 text-red-500 cursor-not-allowed"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    {slot.horaire} ({slot.places} place{slot.places > 1 ? "s" : ""})
                  </button>
                ))
              )}
            </div>
          </div>
        )}

        {/* Bouton de confirmation */}
        {selectedSlot && (
          <div className="text-center mt-6">
            <button
              onClick={handleConfirm}
              className="bg-[#9898E3] hover:bg-[#7a7ad2] text-white px-6 py-2 rounded-md text-lg transition"
            >
              Confirmer le rendez-vous
            </button>
          </div>
        )}
      </div>
  );
}

export default PrendreRdv;
