function DoctorProfile() {
    const doctor = {
      firstName: "Jean",
      lastName: "Kouassi",
      email: "jean.kouassi@locdoc.com",
      telephone: "0102030405",
      specialties: ["Cardiologie", "Médecine générale"],
      description: "Cardiologue expérimenté avec 10 ans de pratique hospitalière. Passionné par l’accompagnement des patients.",
      disponibilite: {
        lundi: {
          available: true,
          morning: { start: "09:00", end: "12:00" },
          afternoon: { start: "14:00", end: "17:00" },
        },
        mardi: {
          available: false,
          morning: { start: "", end: "" },
          afternoon: { start: "", end: "" },
        },
        mercredi: {
          available: true,
          morning: { start: "08:30", end: "12:00" },
          afternoon: { start: "13:30", end: "16:30" },
        },
        jeudi: {
          available: true,
          morning: { start: "09:00", end: "12:00" },
          afternoon: { start: "15:00", end: "18:00" },
        },
        vendredi: {
          available: false,
          morning: { start: "", end: "" },
          afternoon: { start: "", end: "" },
        },
        samedi: {
          available: true,
          morning: { start: "09:00", end: "12:00" },
          afternoon: { start: "14:00", end: "16:00" },
        },
        dimanche: {
          available: false,
          morning: { start: "", end: "" },
          afternoon: { start: "", end: "" },
        },
      },
    };
  
    const jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
  
    return (
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-[#9898E3] mb-6">Profil du Médecin</h1>
  
          {/* Infos du médecin */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Nom</p>
              <p className="text-xl font-semibold">{doctor.lastName} {doctor.firstName}</p>
  
              <p className="text-sm text-gray-500 mt-4">Email</p>
              <p className="text-lg">{doctor.email}</p>
  
              <p className="text-sm text-gray-500 mt-4">Téléphone</p>
              <p className="text-lg">{doctor.telephone}</p>
            </div>
  
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Spécialités</p>
              <ul className="list-disc list-inside text-lg">
                {doctor.specialties.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
  
              <p className="text-sm text-gray-500 mt-4">Description</p>
              <p className="text-base text-gray-700">{doctor.description}</p>
            </div>
          </div>
  
          {/* Disponibilités */}
          <h2 className="text-2xl font-bold text-[#9898E3] mb-4">Horaires de disponibilité</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jours.map((jour) => {
              const dispo = doctor.disponibilite[jour];
              return (
                <div
                  key={jour}
                  className={`p-4 rounded-lg shadow ${
                    dispo.available ? "bg-green-50" : "bg-red-50 text-gray-400"
                  }`}
                >
                  <h3 className="capitalize text-lg font-semibold mb-2">{jour}</h3>
                  {dispo.available ? (
                    <>
                      <p className="text-sm">
                        <strong>Matin :</strong> {dispo.morning.start} - {dispo.morning.end}
                      </p>
                      <p className="text-sm mt-1">
                        <strong>Après-midi :</strong> {dispo.afternoon.start} - {dispo.afternoon.end}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm italic">Indisponible</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
    );
  }
  
  export default DoctorProfile;
  