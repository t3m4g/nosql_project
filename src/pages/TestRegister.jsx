import { useState } from "react";
import { Eye, EyeOff, Calendar, Mail, Phone, Lock, User, MapPin, UserPlus } from "lucide-react";
import phonImg from "../assets/phon.png"; // 📷 remplace par le chemin réel de ton image
import phonCart from "../assets/cart.jpg";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div
        className="relative min-h-screen flex items-center justify-start px-4 md:px-16 bg-cover bg-center overflow-hidden bg-no-repeat bg-fixed"
        style={{
            backgroundImage: `url(${phonCart})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
        }}
    >

        
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-20 z-0 pointer-events-none"></div>

      {/* Image à gauche */}
      <div className="flex-[0_0_60%] relative right-[-150px] z-10 h-[90vh] hidden md:flex items-center justify-start">
        <img src={phonImg} alt="Doctor illustration" className="h-full object-contain" />
      </div>

      {/* Dégradé violet */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-r from-transparent to-[#9797E1] z-0 pointer-events-none hidden md:block"></div>

      {/* Formulaire */}
      <div className="relative flex-[0_0_60%] max-w-[600px] max-h-[85vh] ml-[-250px] bg-white/20 backdrop-blur-md z-10 text-gray-800 rounded-xl p-10 shadow-xl border border-white/40 overflow-y-auto">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#5C5CEA] to-[#2E8C5A] bg-clip-text text-transparent mb-2">Bienvenue sur LocDoc!</h2>
        <p className="text-sm text-center text-gray-600 mb-8">Inscrivez-vous et accédez à un réseau de médecins qualifiés en quelques clics</p>

        <form className="space-y-4">
          {/* Nom */}
          <div>
            <label className="block font-semibold mb-1">Identité</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="text" placeholder="Nom" required className="input-style" />
            </div>
          </div>

          {/* Prénom + Genre */}
          <div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="text" placeholder="Prénoms" required className="input-style" />
            </div>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="genre" value="masculin" required className="scale-125" />
                Homme
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="genre" value="feminin" required className="scale-125" />
                Femme
              </label>
            </div>
          </div>

          {/* Date naissance */}
          <div>
            <label className="block font-semibold mb-1">Date de naissance</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="date" required className="input-style" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Contacts</label>
            <div className="relative mb-3">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="email" placeholder="Email" required className="input-style" />
            </div>
            <div className="relative mb-3">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="tel" placeholder="Indicatif Téléphonique (+229)" required className="input-style" />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="tel" placeholder="Tél (XXXXXXXX)" required className="input-style" />
            </div>
          </div>

          {/* Rôle */}
          <div>
            <label className="block font-semibold mb-1">Rôle</label>
            <div className="relative">
              <UserPlus className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <select required className="input-style pr-10">
                <option value="patient">Patient</option>
                <option value="medecin">Médecin</option>
              </select>
            </div>
          </div>

          {/* Adresse */}
          <div>
            <label className="block font-semibold mb-1">Adresse</label>
            <div className="relative mb-3">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="text" placeholder="Ville" required className="input-style" />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="text" placeholder="Quartier - Rue" required className="input-style" />
            </div>
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block font-semibold mb-1">Mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Entrez votre mot de passe"
                required
                className="input-style"
              />
              <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirmez votre mot de passe"
                required
                className="input-style"
              />
              <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Conditions */}
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" required className="mt-1 scale-125" />
            <label>
              Je confirme avoir lu et accepté les <a href="#" className="text-indigo-600 underline">conditions générales</a>.
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="w-full bg-[#9898E3] hover:bg-[#7c7cdb] text-white py-3 rounded-md text-lg font-medium transition">
            Créer mon compte
          </button>

          <p className="text-center text-sm text-gray-600">
            Vous avez déjà un compte ?{" "}
            <a href="#" className="text-indigo-600 font-semibold hover:underline">
              Connectez-vous
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
