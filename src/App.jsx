import React, { useState } from "react";
import {
  Heart,
  Gift,
  Star,
  Coffee,
  Utensils,
  Music,
  Camera,
  Ticket,
  Home,
  Flower,
  Film,
  Book,
  Palette,
  Bike,
  Umbrella,
  Wine,
  Cake,
  Shirt,
  Headphones,
  Gamepad,
  TreesIcon as Tree,
  Zap,
  Smile,
  Bell,
} from "lucide-react";

import { Card, CardContent } from "./components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";

const activities = [
  {
    icon: Heart,
    text: "Tu sonrisa ilumina mi mundo más que cualquier luz navideña.",
    bgColor: "bg-red-100",
  },
  {
    icon: Gift,
    text: "Cada día contigo se siente como la mañana de Navidad.",
    bgColor: "bg-green-100",
  },
  {
    icon: Star,
    text: "Eres la estrella en la cima de mi árbol de Navidad - la parte más importante de mi vida.",
    bgColor: "bg-yellow-100",
  },
  {
    icon: Coffee,
    text: "Despertar contigo es mejor que el olor de las galletas navideñas por la mañana.",
    bgColor: "bg-brown-100",
  },
  {
    icon: Utensils,
    text: "Eres el ingrediente secreto que hace mi vida deliciosa.",
    bgColor: "bg-orange-100",
  },
  {
    icon: Music,
    text: "Tu risa es mi villancico favorito.",
    bgColor: "bg-purple-100",
  },
  {
    icon: Camera,
    text: "Cada momento contigo es perfecto, como una postal navideña.",
    bgColor: "bg-blue-100",
  },
  {
    icon: Ticket,
    text: "No necesito un boleto para ningún espectáculo - verte es mi entretenimiento favorito.",
    bgColor: "bg-indigo-100",
  },
  {
    icon: Home,
    text: "Mi hogar está donde estés tú, especialmente durante las fiestas.",
    bgColor: "bg-teal-100",
  },
  {
    icon: Flower,
    text: "Tu amor es más relajante que cualquier día de spa.",
    bgColor: "bg-green-100",
  },
  {
    icon: Film,
    text: "Nuestra historia de amor es mejor que cualquier película navideña que haya visto.",
    bgColor: "bg-gray-100",
  },
  {
    icon: Book,
    text: "Eres mi capítulo favorito en la historia de mi vida.",
    bgColor: "bg-yellow-100",
  },
  {
    icon: Palette,
    text: "Tú coloreas mi mundo con alegría, especialmente durante esta temporada festiva.",
    bgColor: "bg-pink-100",
  },
  {
    icon: Bike,
    text: "La vida contigo es un hermoso viaje, sin importar la estación.",
    bgColor: "bg-blue-100",
  },
  {
    icon: Umbrella,
    text: "Eres mi refugio de las tormentas de la vida, mi cálida manta navideña.",
    bgColor: "bg-purple-100",
  },
  {
    icon: Wine,
    text: "Brindo por nosotros - la mejor combinación que podría pedir.",
    bgColor: "bg-red-100",
  },
  {
    icon: Cake,
    text: "Eres más dulce que cualquier postre navideño que haya probado.",
    bgColor: "bg-pink-100",
  },
  {
    icon: Shirt,
    text: "Encajas perfectamente en mis brazos, como un suéter navideño hecho a medida.",
    bgColor: "bg-green-100",
  },
  {
    icon: Headphones,
    text: "El sonido de tu voz es mi melodía favorita.",
    bgColor: "bg-purple-100",
  },
  {
    icon: Gamepad,
    text: "Eres mi jugadora dos en este juego de la vida, y no podría pedir una mejor compañera.",
    bgColor: "bg-blue-100",
  },
  {
    icon: Tree,
    text: "Nuestro amor crece más fuerte cada día, como un árbol de Navidad bien cuidado.",
    bgColor: "bg-green-100",
  },
  {
    icon: Zap,
    text: "Electrificas mi vida con tu amor y energía.",
    bgColor: "bg-yellow-100",
  },
  {
    icon: Smile,
    text: "Tu sonrisa es el mejor regalo que podría recibir.",
    bgColor: "bg-orange-100",
  },
  {
    icon: Bell,
    text: "Mi corazón suena de alegría cada vez que pienso en ti, como campanas navideñas.",
    bgColor: "bg-red-100",
  },
];

function CalendarioDeAdvientoNavideno() {
  const [diaAbierto, setDiaAbierto] = useState(null);

  // Function to check if a day is accessible
  const isDayAccessible = (dayNumber) => {
    // Current year's advent calendar (assuming current year)
    const currentYear = new Date().getFullYear();
    const currentDate = new Date();

    // Advent Calendar starts on December 1st and ends on December 24th
    const startDate = new Date(currentYear, 11, 1); // Month is 0-indexed
    const endDate = new Date(currentYear, 11, 24);

    // Check if current date is within advent calendar period
    if (currentDate < startDate) {
      return false; // Before advent calendar starts
    }

    // If the day is less than or equal to current date, it's accessible
    const targetDate = new Date(currentYear, 11, dayNumber);
    return targetDate <= currentDate && targetDate <= endDate;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-rose-200 p-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-fall text-rose-300 opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 10}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ❤
          </div>
        ))}
      </div>
      <div className="max-w-4xl mx-auto z-10 relative">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-rose-700 mb-2">
            Calendario de Adviento Romántico
          </h1>
          <p className="text-xl text-rose-600">
            24 Días de Mensajes de Amor para Mi Novia
          </p>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {activities.map((activity, index) => {
            const day = index + 1;
            const isAccessible = isDayAccessible(day);

            return (
              <div
                key={index}
                className={`relative ${
                  !isAccessible ? "opacity-50 cursor-not-allowed" : ""
                }`}
                title={!isAccessible ? "Este día aún no está disponible" : ""}
              >
                {isAccessible ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card
                        className={`${activity.bgColor} hover:bg-white transition-colors cursor-pointer border-2 border-rose-200 hover:border-rose-400 overflow-hidden`}
                      >
                        <CardContent className="p-4 flex flex-col items-center justify-center h-32 relative">
                          <span className="text-2xl font-bold text-rose-600 mb-2 z-10">
                            {day}
                          </span>
                          <activity.icon className="w-8 h-8 text-rose-500 z-10" />
                          <div className="absolute inset-0 opacity-20">
                            <activity.icon className="w-full h-full text-rose-300" />
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="bg-white rounded-lg p-6 w-80">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-rose-600 mb-4">
                          Día {day}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col items-center">
                        <activity.icon className="w-16 h-16 text-rose-500 mb-4" />
                        <p className="text-lg text-center text-gray-700">
                          {activity.text}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Card
                    className={`${activity.bgColor} opacity-50 cursor-not-allowed border-2 border-rose-200 overflow-hidden`}
                  >
                    <CardContent className="p-4 flex flex-col items-center justify-center h-32 relative">
                      <span className="text-2xl font-bold text-rose-600 mb-2 z-10">
                        {day}
                      </span>
                      <activity.icon className="w-8 h-8 text-rose-500 z-10 opacity-50" />
                      <div className="absolute inset-0 opacity-10">
                        <activity.icon className="w-full h-full text-rose-300" />
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CalendarioDeAdvientoNavideno;
