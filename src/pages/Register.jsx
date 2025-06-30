import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { apiService } from "../services/apiService";

function Register() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    date_naissance: "1990-10-01",
    sexe: "M",
    telephone: "",
    role: "patient", // valeur initiale
    street: "",
    city: "",
    postal_code: "",
    country: "",
    longitude: "",
    latitude: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const payload = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
      first_name: formData.first_name,
      last_name: formData.last_name,
      date_naissance: formData.date_naissance,
      sexe: formData.sexe,
      telephone: formData.telephone,
      role: [formData.role], // tableau avec un seul rôle
      address: {
        street: formData.street,
        city: formData.city,
        postal_code: formData.postal_code,
        country: formData.country,
      },
      longitude: parseFloat(formData.longitude),
      latitude: parseFloat(formData.latitude),
    };

    try {
      const res = await apiService.post("/auth/register", payload);

      if (res?.id) {
        setMessage(res.message || "Compte créé avec succès !");
        setTimeout(() => {
          navigate("/login");
        }, 2500);
      } else {
        setError("Une erreur s’est produite. Veuillez réessayer.");
      }
    } catch (err) {
      console.error("Erreur:", err);
      setError("Erreur serveur. Vérifiez vos informations.");
    }
  };

  return (
    <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-[#9898E3] mb-8">Créer un compte LOCDOC</h2>

      {message && <p className="text-green-600 text-center mb-4">{message}</p>}
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Infos personnelles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="first_name" onChange={handleChange} value={formData.first_name} className="w-full px-4 py-2 border rounded-md" placeholder="Prénom" />
          <input name="last_name" onChange={handleChange} value={formData.last_name} className="w-full px-4 py-2 border rounded-md" placeholder="Nom" />
          <input name="username" onChange={handleChange} value={formData.username} className="w-full px-4 py-2 border rounded-md" placeholder="Nom d'utilisateur" />
          <input name="email" type="email" onChange={handleChange} value={formData.email} className="w-full px-4 py-2 border rounded-md" placeholder="Email" />
        </div>

        {/* Mot de passe */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              value={formData.password}
              className="w-full px-4 py-2 border rounded-md pr-10"
              placeholder="MotDePasseSecure123!"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-[#9898E3]"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Infos complémentaires */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input type="date" name="date_naissance" value={formData.date_naissance} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
          <select name="sexe" onChange={handleChange} value={formData.sexe} className="w-full px-4 py-2 border rounded-md">
            <option value="M">Homme</option>
            <option value="F">Femme</option>
          </select>
          <input name="telephone" onChange={handleChange} value={formData.telephone} className="w-full px-4 py-2 border rounded-md" placeholder="Téléphone" />
        </div>

        {/* Rôle */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Rôle</label>
          <select name="role" onChange={handleChange} value={formData.role} className="w-full px-4 py-2 border rounded-md">
            <option value="patient">Patient</option>
            <option value="doctor">Médecin</option>
          </select>
        </div>

        {/* Adresse */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Adresse</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="street" onChange={handleChange} value={formData.street} className="px-4 py-2 border rounded-md" placeholder="Rue" />
            <input name="city" onChange={handleChange} value={formData.city} className="px-4 py-2 border rounded-md" placeholder="Ville" />
            <input name="postal_code" onChange={handleChange} value={formData.postal_code} className="px-4 py-2 border rounded-md" placeholder="Code postal" />
            <input name="country" onChange={handleChange} value={formData.country} className="px-4 py-2 border rounded-md" placeholder="Pays" />
          </div>
        </div>

        {/* Géolocalisation */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="longitude"
            step="any"
            onChange={handleChange}
            value={formData.longitude}
            className="px-4 py-2 border rounded-md"
            placeholder="Longitude: 2.3522"
          />
          <input
            type="number"
            name="latitude"
            step="any"
            onChange={handleChange}
            value={formData.latitude}
            className="px-4 py-2 border rounded-md"
            placeholder="Latitude: 48.8566"
          />
        </div>

        {/* Bouton inscription */}
        <button
          type="submit"
          className="w-full bg-[#9898E3] text-white py-2 rounded-md hover:bg-[#7c7cdb] transition"
        >
          Créer mon compte
        </button>
      </form>
    </div>
  );
}

export default Register;
