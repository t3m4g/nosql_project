import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#9898E3] mb-6">Connexion à LOCDOC</h2>
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9898E3]"
              placeholder="exemple@locdoc.com"
            />
          </div>

          {/* Mot de passe avec bouton voir/masquer */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9898E3] pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-[#9898E3]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Lien oublié */}
          <div className="text-right">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Mot de passe oublié ?
            </a>
          </div>

          {/* Bouton submit */}
          <button
            type="submit"
            className="w-full bg-[#9898E3] text-white py-2 rounded-md hover:bg-[#7c7cdb] transition"
          >
            Se connecter
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Vous n’avez pas de compte ?{" "}
          <a href="#" className="text-[#9898E3] font-medium hover:underline">
            Créez-en un
          </a>
        </p>
      </div>
  );
}

export default Login;
