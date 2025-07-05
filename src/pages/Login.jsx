import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import phonImg from "../assets/phon.png";
import loginBackground from "../assets/cart.jpg";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="relative min-h-screen flex items-center justify-start px-4 md:px-16 bg-cover bg-center overflow-hidden bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-20 z-0 pointer-events-none"></div>

      <div className="flex-[0_0_60%] relative right-[-150px] z-10 h-[90vh] hidden md:flex items-center justify-start">
        <img src={phonImg} alt="Doctor illustration" className="h-full object-contain" />
      </div>

      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-r from-transparent to-[#9797E1] z-0 pointer-events-none hidden md:block"></div>

      <div className="relative flex-[0_0_60%] max-w-[600px] ml-[-170px] bg-white/20 backdrop-blur-md z-10 text-gray-800 rounded-xl p-10 shadow-xl border border-white/40">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#5C5CEA] to-[#2E8C5A] bg-clip-text text-transparent mb-4">Bienvenue à nouveau</h2>
        <p className="text-center text-gray-600 mb-6">Nous sommes ravis de vous revoir :)</p>

        <form className="space-y-6">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="email" placeholder="Adresse email" required className="input-style" />
          </div>

          {/* Mot de passe */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              required
              className="input-style"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="scale-125" />
              Se souvenir de moi
            </label>
            <a href="#" className="text-indigo-600 hover:underline">Mot de passe oublié ?</a>
          </div>

          {/* Submit */}
          <button type="submit" className="w-full bg-[#9898E3] hover:bg-[#7c7cdb] text-white py-3 rounded-md text-lg font-medium transition">
            Se connecter
          </button>

          <p className="text-center text-sm text-gray-600">
            Vous n’avez pas de compte ?{" "}
            <a href="#" className="text-indigo-600 font-semibold hover:underline">
              Créez-en un
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
