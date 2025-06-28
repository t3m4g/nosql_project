import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#9898E3] mb-8">Créer un compte LOCDOC</h2>
        <form className="space-y-6">

          {/* Infos personnelles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Prénom</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md" placeholder="Gbèto" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md" placeholder="YENONMON" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md" placeholder="gbeto" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-md" placeholder="donagoliag@gmail.com" />
            </div>
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
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
            <div>
              <label className="block text-sm font-medium text-gray-700">Date de naissance</label>
              <input type="date" className="w-full px-4 py-2 border rounded-md" defaultValue="1990-10-01" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Sexe</label>
              <select className="w-full px-4 py-2 border rounded-md">
                <option value="M">Homme</option>
                <option value="F">Femme</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Téléphone</label>
              <input type="tel" className="w-full px-4 py-2 border rounded-md" placeholder="0110111214" />
            </div>
          </div>

          {/* Adresse */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Adresse</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" className="px-4 py-2 border rounded-md" placeholder="123 Rue de la Paix" />
              <input type="text" className="px-4 py-2 border rounded-md" placeholder="Paris" />
              <input type="text" className="px-4 py-2 border rounded-md" placeholder="75001" />
              <input type="text" className="px-4 py-2 border rounded-md" placeholder="France" />
            </div>
          </div>

          {/* Géolocalisation */}
          <div className="grid grid-cols-2 gap-4">
            <input type="number" step="any" className="px-4 py-2 border rounded-md" placeholder="Longitude: 2.3522" />
            <input type="number" step="any" className="px-4 py-2 border rounded-md" placeholder="Latitude: 48.8566" />
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
