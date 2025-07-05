import { useEffect, useRef } from "react";
import Homme from "./../assets/homme.png";
import TheHomme from "./../assets/thehomme.png";
import Background from "./../assets/arriere.png";

const testimonials = [
  {
    name: "Afi Johnson",
    specialty: "Utilisatrice de Cotonou",
    experience: "“Super service, j’ai pu voir un docteur en 2 clics !”",
    ima: Homme,
  },
  {
    name: "Mamadou Diop",
    specialty: "Utilisateur de Dakar",
    experience: "“LOCDOC a changé ma façon de prendre rendez-vous !”",
    ima: TheHomme,
  },
  {
    name: "Sophie Gnahoua",
    specialty: "Utilisatrice de Lomé",
    experience: "“Simple, rapide et efficace. Bravo à l'équipe.”",
    ima: Homme,
  },
  {
    name: "Baké KEITA",
    specialty: "Utilisatrice de Malanville",
    experience: "“Mon fils a pu être vite trouver la guérison. Je suis très contente.”",
    ima: TheHomme,
  },
  {
    name: "Xavier KOUDONOU",
    specialty: "Utilisateur de Porto",
    experience: "“Grâce à cette application, j’ai été soigné rapidement. Merci l’équipe.”",
    ima: Homme,
  },
];

export default function PatientTestimonials() {
  const scrollRef = useRef();

  useEffect(() => {
    const el = scrollRef.current;
    let animationFrame;
    let isPaused = false;

    const scroll = () => {
      if (!isPaused) {
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += 1;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();

    const handleMouseEnter = () => (isPaused = true);
    const handleMouseLeave = () => (isPaused = false);

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden py-12 bg-white">
      <div
        ref={scrollRef}
        className="flex gap-12 px-4 overflow-x-scroll scroll-smooth no-scrollbar"
        style={{ minWidth: "200%" }}
      >
        {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((patient, index) => (
          
          <div
            key={index}
            className="relative group w-56 flex-shrink-0 text-center"
            >
            {/* Image de fond derrière le portrait */}
            <div className="relative h-36 flex items-center justify-center">
                <img
                src={Background}
                alt="arrière-plan"
                className="absolute w-40 h-40 object-contain opacity-20"
                />
                <img
                src={patient.ima}
                alt={patient.name}
                className="rounded-full h-28 w-28 object-cover shadow-md relative z-10"
                />
            </div>

            {/* Bloc nom/localisation ET témoignage */}
            <div className="mt-3 relative h-20">
                {/* Nom et localisation */}
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                <p className="font-semibold text-lg text-gray-800">{patient.name}</p>
                <p className="text-sm text-gray-500">{patient.specialty}</p>
                </div>

                {/* Témoignage au hover (remplace nom/localisation) */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center p-4">
                <p className="text-md text-gray-700 italic">{patient.experience}</p>
                </div>
            </div>
            </div>

          
        ))}
      </div>
    </div>
  );
}
