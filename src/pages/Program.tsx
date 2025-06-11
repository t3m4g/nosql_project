import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { CalendarClock, MapPin, Users } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

// Sample program data - in a real app, this would come from an API
const programData = {
  days: [
    {
      date: "2025-09-22",
      name: "Jour 1",
      // sessions: [
      //   {
      //     id: "1",
      //     title: "Session d'ouverture",
      //     time: "09:00 - 10:30",
      //     location: "Amphithéâtre Principal",
      //     type: "plénière",
      //     speakers: ["Prof. Marie Dupont"],
      //     description:
      //       "Discours d'ouverture et présentation des thèmes du colloque",
      //   },
      //   {
      //     id: "2",
      //     title: "Innovations en Intelligence Artificielle",
      //     time: "11:00 - 12:30",
      //     location: "Salle A",
      //     type: "session",
      //     chair: "Dr. Jean Martin",
      //     presentations: [
      //       {
      //         id: "p1",
      //         title: "L'IA au service de la recherche médicale",
      //         authors: ["Sophie Lambert", "Thomas Petit"],
      //         abstract:
      //           "Cette présentation explorera comment l'IA révolutionne la recherche médicale...",
      //       },
      //       {
      //         id: "p2",
      //         title: "Apprentissage profond pour l'analyse d'images",
      //         authors: ["Paul Dupuis"],
      //         abstract:
      //           "Nouvelles approches dans l'analyse d'images médicales utilisant le deep learning...",
      //       },
      //     ],
      //   },
      //   {
      //     id: "3",
      //     title: "Déjeuner et Networking",
      //     time: "12:30 - 14:00",
      //     location: "Hall Principal",
      //     type: "pause",
      //   },
      // ],
    },
    {
      date: "2025-09-16",
      name: "Jour 2",
      // sessions: [
      //   {
      //     id: "4",
      //     title: "Avancées en Biotechnologie",
      //     time: "09:00 - 10:30",
      //     location: "Salle B",
      //     type: "session",
      //     chair: "Dr. Amélie Rousseau",
      //     presentations: [
      //       {
      //         id: "p3",
      //         title: "Thérapies géniques : état des lieux",
      //         authors: ["Marc Lefevre", "Claire Dubois"],
      //         abstract:
      //           "Cette présentation fera le point sur les avancées récentes en thérapie génique...",
      //       },
      //       {
      //         id: "p4",
      //         title: "Bioimpression 3D pour la médecine régénérative",
      //         authors: ["Julie Moreau"],
      //         abstract:
      //           "Applications de la bioimpression 3D dans le domaine de la médecine régénérative...",
      //       },
      //     ],
      //   },
      //   {
      //     id: "5",
      //     title: "Table ronde : Éthique et Innovation",
      //     time: "11:00 - 12:30",
      //     location: "Amphithéâtre Principal",
      //     type: "table ronde",
      //     moderator: "Prof. François Blanc",
      //     participants: [
      //       "Dr. Christine Noir",
      //       "Prof. Michel Vert",
      //       "Dr. Lucie Bleu",
      //     ],
      //     description:
      //       "Discussion sur les implications éthiques des innovations technologiques en santé",
      //   },
      //   {
      //     id: "6",
      //     title: "Session de clôture",
      //     time: "16:00 - 17:30",
      //     location: "Amphithéâtre Principal",
      //     type: "plénière",
      //     speakers: ["Prof. Pierre Legrand"],
      //     description: "Synthèse du colloque et perspectives futures",
      //   },
      // ],
    },
  ],
};

const Program = () => {
  const [selectedDay, setSelectedDay] = useState(programData.days[0].date);
  const navigate = useNavigate();

  // Filter sessions based on selected day
  const displaySessions =
    programData.days.find((day) => day.date === selectedDay)?.sessions || [];

  return (
    <div className="flex-1 container max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Programme du IXème colloque des Sciences, Cultures et Technologies{" "}
          </h1>
          <p className="text-gray-600">
            22 - 26 Septembre 2025 • Université d'Abomey-Calavi, Bénin
          </p>
        </div>
        <Button
          variant="outline"
          className="mt-4 md:mt-0"
          onClick={() => navigate("/participer-colloque")}
        >
          Inscription d'un participant au colloque
        </Button>
      </div>

      <Tabs
        defaultValue={programData.days[0].date}
        onValueChange={setSelectedDay}
        className="mb-8"
      >
        <TabsList className="grid w-full md:w-fit grid-cols-2">
          {programData.days.map((day) => (
            <TabsTrigger key={day.date} value={day.date}>
              {day.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* {programData.days.map((day) => (
          <TabsContent key={day.date} value={day.date} className="space-y-6">
            <h2 className="text-xl font-semibold">
              {day.name} -{" "}
              {new Date(day.date).toLocaleDateString("fr-FR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h2>

            {displaySessions.map((session) => (
              <Card key={session.id} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <CardTitle className="text-xl">{session.title}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <CalendarClock className="h-4 w-4 mr-1" />
                        {session.time}
                        <span className="mx-2">•</span>
                        <MapPin className="h-4 w-4 mr-1" />
                        {session.location}
                      </CardDescription>
                    </div>
                    <Badge
                      variant={
                        session.type === "plénière"
                          ? "default"
                          : session.type === "session"
                          ? "secondary"
                          : session.type === "table ronde"
                          ? "outline"
                          : "secondary"
                      }
                      className="mt-2 md:mt-0 self-start"
                    >
                      {session.type.charAt(0).toUpperCase() +
                        session.type.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  {session.type === "plénière" && (
                    <div>
                      <p className="text-sm font-medium">
                        Intervenants: {session.speakers.join(", ")}
                      </p>
                      <p className="mt-2 text-gray-600">
                        {session.description}
                      </p>
                    </div>
                  )}

                  {session.type === "session" && (
                    <div>
                      <p className="text-sm font-medium">
                        Président(e): {session.chair}
                      </p>
                      <div className="mt-4 space-y-4">
                        <h4 className="font-semibold">Présentations:</h4>
                        {session.presentations.map((presentation) => (
                          <div
                            key={presentation.id}
                            className="pl-4 border-l-2 border-gray-200"
                          >
                            <h5 className="font-medium">
                              {presentation.title}
                            </h5>
                            <p className="text-sm text-gray-600 flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {presentation.authors.join(", ")}
                            </p>
                            <p className="mt-1 text-sm text-gray-600">
                              {presentation.abstract}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {session.type === "table ronde" && (
                    <div>
                      <p className="text-sm font-medium">
                        Modérateur: {session.moderator}
                      </p>
                      <p className="text-sm mt-1">
                        Participants: {session.participants.join(", ")}
                      </p>
                      <p className="mt-2 text-gray-600">
                        {session.description}
                      </p>
                    </div>
                  )}

                  {session.type === "pause" && (
                    <p className="text-gray-600">Pause</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))} */}
      </Tabs>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">Information importante</h3>
        <p>
          Le programme est susceptible de subir des modifications. Veuillez
          consulter régulièrement cette page pour les mises à jour.
        </p>
      </div>
    </div>
  );
};

export default Program;
