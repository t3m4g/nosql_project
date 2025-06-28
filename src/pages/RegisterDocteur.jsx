import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const jours = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];

function RegisterDoctor() {
  const [showPassword, setShowPassword] = useState(false);
  const [disponibilite, setDisponibilite] = useState(
    jours.reduce((acc, jour) => {
      acc[jour] = {
        available: true,
        morning: { start: "09:00", end: "12:00" },
        afternoon: { start: "14:00", end: "17:00" },
      };
      return acc;
    }, {})
  );

  const handleTimeChange = (jour, periode, champ, value) => {
    setDisponibilite((prev) => ({
      ...prev,
      [jour]: {
        ...prev[jour],
        [periode]: {
          ...prev[jour][periode],
          [champ]: value,
        },
      },
    }));
  };

  const handleAvailabilityToggle = (jour) => {
    setDisponibilite((prev) => ({
      ...prev,
      [jour]: {
        ...prev[jour],
        available: !prev[jour].available,
      },
    }));
  };

  return (
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-[#9898E3] mb-6">
          Inscription Médecin – LOCDOC
        </h2>

        <form className="space-y-6">
          {/* Email et mot de passe */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" className="w-full border px-4 py-2 rounded-md" placeholder="doctor@locdoc.com" />
            </div>
            
            <div>
              <label className="block text-sm font-medium">Spécialités</label>
              <input type="text" className="w-full border px-4 py-2 rounded-md" placeholder="Cardiologie, Pédiatrie..." />
            </div>
          </div>

          {/* Disponibilité */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#9898E3]">Disponibilité par jour</h3>
            <div className="grid grid-cols-1 gap-6">
              {jours.map((jour) => (
                <div key={jour} className="border p-4 rounded-md bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold capitalize">{jour}</h4>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={disponibilite[jour].available}
                        onChange={() => handleAvailabilityToggle(jour)}
                        className="form-checkbox"
                      />
                      <span className="text-sm">Disponible</span>
                    </label>
                  </div>

                  {disponibilite[jour].available && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Matin */}
                      <div>
                        <label className="text-sm block mb-1">Matin</label>
                        <div className="flex gap-2">
                          <input
                            type="time"
                            value={disponibilite[jour].morning.start}
                            onChange={(e) => handleTimeChange(jour, "morning", "start", e.target.value)}
                            className="border px-2 py-1 rounded-md w-full"
                          />
                          <input
                            type="time"
                            value={disponibilite[jour].morning.end}
                            onChange={(e) => handleTimeChange(jour, "morning", "end", e.target.value)}
                            className="border px-2 py-1 rounded-md w-full"
                          />
                        </div>
                      </div>
                      {/* Après-midi */}
                      <div>
                        <label className="text-sm block mb-1">Après-midi</label>
                        <div className="flex gap-2">
                          <input
                            type="time"
                            value={disponibilite[jour].afternoon.start}
                            onChange={(e) => handleTimeChange(jour, "afternoon", "start", e.target.value)}
                            className="border px-2 py-1 rounded-md w-full"
                          />
                          <input
                            type="time"
                            value={disponibilite[jour].afternoon.end}
                            onChange={(e) => handleTimeChange(jour, "afternoon", "end", e.target.value)}
                            className="border px-2 py-1 rounded-md w-full"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Géolocalisation */}
          {/* <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              step="any"
              className="px-4 py-2 border rounded-md"
              placeholder="Longitude: 2.3522"
            />
            <input
              type="number"
              step="any"
              className="px-4 py-2 border rounded-md"
              placeholder="Latitude: 48.8566"
            />
          </div> */}

          {/* Note (optionnel) */}
          {/* <div>
            <label className="block text-sm font-medium">Note (1 à 5)</label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              className="w-full border px-4 py-2 rounded-md"
              placeholder="4.5"
            />
          </div> */}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#9898E3] text-white py-2 rounded-md hover:bg-[#7c7cdb] transition"
          >
            S’inscrire comme médecin
          </button>
        </form>
      </div>
  );
}

export default RegisterDoctor;
