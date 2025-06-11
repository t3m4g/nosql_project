import { AuthForm } from "../components/auth/AuthForm";

import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
// import { Badge } from "../components/ui/badge";
// import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const programRegister = {
    registerItem: [
        {
            name: "Inscription Pour Les Patients",
            mode: "registerPatient",
            type: "Patient",
            rootAPI: "/register-patient",
        },
        {
            name: "Inscription Pour Les Médecins",
            mode: "registerDoctor",
            type: "Docteur",
            rootAPI: "/register-doctor",
        },
    ]
}

const Register = () => {
    const [selectedRegister, setSelectedRegister] = useState(programRegister.registerItem[0].mode);

  return (
    <>
      <div className="flex-1 container mx-auto px-4 py-12">
        

        <Tabs
            defaultValue={programRegister.registerItem[0].mode}
            onValueChange={setSelectedRegister}
            className="mb-8"
        >
            <TabsList className="grid w-full md:w-fit grid-cols-2">
            {programRegister.registerItem.map((day) => (
                <TabsTrigger key={day.mode} value={day.mode}>
                {day.type}
                </TabsTrigger>
            ))}
            </TabsList>

            {programRegister.registerItem.map((day) => (
                <TabsContent key={day.mode} value={day.mode} className="space-y-6">
                    <h1 className="text-3xl font-bold text-center mb-10">{day.name}</h1>
                    
                    <AuthForm mode={day.mode} />
                </TabsContent>
            ))}

            
        </Tabs>


      </div>
    </>
  );
};

export default Register;