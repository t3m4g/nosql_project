function Dashboard() {
    const user = {
      role: "medecin", // Change "patient" en "medecin" pour tester l'autre dashboard
      firstName: "Gbèto",
      lastName: "YENONMON",
      age: 33,
      profession: "Étudiant",
      sexe: "M",
      email: "gbeto@locdoc.com",
      telephone: "0110111214",
      specialties: ["Cardiologie"],
      description: "Cardiologue expérimenté avec 10 ans de pratique",
      rating: 4.5,
    };
  
    return (
      <div className="min-h-screen ">
        <h1 className="text-3xl font-bold text-center text-[#9898E3] mb-10">
          Tableau de bord - {user.role === "patient" ? "Patient" : "Médecin"}
        </h1>
  
        {/* Container principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Carte nom & prénom */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-gray-700 font-semibold text-sm mb-2">Nom complet</h2>
            <p className="text-xl font-bold">{user.lastName} {user.firstName}</p>
          </div>
  
          {/* Carte âge */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-gray-700 font-semibold text-sm mb-2">Âge</h2>
            <p className="text-xl font-bold">{user.age} ans</p>
          </div>
  
          {/* Carte profession */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-gray-700 font-semibold text-sm mb-2">Profession</h2>
            <p className="text-xl font-bold">{user.profession}</p>
          </div>
  
          {/* Carte sexe */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-gray-700 font-semibold text-sm mb-2">Sexe</h2>
            <p className="text-xl font-bold">{user.sexe === "M" ? "Homme" : "Femme"}</p>
          </div>
  
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-gray-700 font-semibold text-sm mb-2">Email</h2>
            <p className="text-xl font-bold">{user.email}</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-gray-700 font-semibold text-sm mb-2">Téléphone</h2>
            <p className="text-xl font-bold">{user.telephone}</p>
          </div>

          {/* Si utilisateur est médecin */}
          {user.role === "medecin" && (
            <>
              {/* Spécialité */}
              <div className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-gray-700 font-semibold text-sm mb-2">Spécialité(s)</h2>
                <ul className="list-disc list-inside text-lg">
                  {user.specialties.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
  
              {/* Description */}
              <div className="bg-white rounded-2xl shadow p-6 md:col-span-2">
                <h2 className="text-gray-700 font-semibold text-sm mb-2">Description</h2>
                <p className="text-base text-gray-700">{user.description}</p>
              </div>
  
              {/* Rating */}
              <div className="bg-white rounded-2xl shadow p-6">
                <h2 className="text-gray-700 font-semibold text-sm mb-2">Note</h2>
                <p className="text-2xl font-bold text-[#F59E0B]">{user.rating} ★</p>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  