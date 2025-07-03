import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { apiService } from "../services/apiService";

const jours = [
  "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche",
];

function RegisterDoctor() {
  const navigate = useNavigate();
  const { user, token, setUser } = useAuthStore();

  const [specialties, setSpecialties] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!user || !token) {
      setError("Vous devez être connecté pour enregistrer un médecin.");
      return;
    }

    const payload = {
      id: user.id,
      email:  "wegayo4388@finfave.com", // user.email,
      specialties: specialties.split(",").map((s) => s.trim()),
      description,
      disponibilite,
      rating: 0.0, // valeur par défaut
    };

    try {
      const res = await apiService.post("/doctors/", payload, token);

      if (res?.specialties) {
        // Mise à jour du store avec spécialité
        setUser({
          ...user,
          specialitie: res.specialties,
        });

        setMessage("Inscription médecin réussie !");
        setTimeout(() => {
          navigate("/dashboard"); // ou toute autre page après inscription
        }, 2500);
      } else {
        setError("Erreur lors de l’enregistrement.");
      }
    } catch (err) {
      console.error("Erreur API:", err);
      setError("Une erreur est survenue.");
    }
  };

  return (
    <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-[#9898E3] mb-6">
        Inscription Médecin – LOCDOC
      </h2>

      {message && <p className="text-green-600 text-center">{message}</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Email et spécialités */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={user?.email || ""}
              disabled
              className="w-full border px-4 py-2 rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Spécialités</label>
            <input
              type="text"
              value={specialties}
              onChange={(e) => setSpecialties(e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
              placeholder="Cardiologie, Pédiatrie..."
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
            rows={4}
            placeholder="Décrivez votre expérience, vos compétences..."
            required
          />
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
