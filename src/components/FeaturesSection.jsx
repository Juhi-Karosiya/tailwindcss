import { 
  Bike, 
  HandCoins, 
  MapPin, 
  Headphones, 
  CalendarCheck2, 
  ShieldCheck, 
  Clock 
} from "lucide-react";

const FEATURES_CONFIG = [
  {
    title: "Cost Effective",
    description: "we charged affordable price to rent a bicycle.",
    icon: <HandCoins className="h-10 w-10 text-green-500" />,
  },
  {
    title: "Wide Selection",
    description: "Choose from a variety of Bicyles including mountain Bicyle.",
    icon: <Bike className="h-10 w-10 text-yellow-500" />,
  },
  {
    title: "Convenient Locations",
    description: "Pick up and drop off at multiple GO GREEN Stations.",
    icon: <MapPin className="h-10 w-10 text-green-500" />,
  },
  {
    title: "24/7 Support",
    description: "Our customer support team is always available to help you.",
    icon: <Headphones className="h-10 w-10 text-yellow-500" />,
  },
  {
    title: "Easy Booking",
    description: "Book your rental in bicyle just in few simple steps.",
    icon: <CalendarCheck2 className="h-10 w-10 text-green-500" />,
  },
  {
    title: "Assured Safety",
    description: "We provide safety of the customer as well as environment.",
    icon: <ShieldCheck className="h-10 w-10 text-yellow-500" />,
  },
  {
    title: "Flexible Rentals",
    description: "Choose hourly, daily, or monthly rental options.",
    icon: <Clock className="h-10 w-10 text-green-500" />,
  },
  {
    title: "Eco-Friendly",
    description: "We support our mother nature and promote greenary.",
    icon: <Bike className="h-10 w-10 text-yellow-500" />,
  }
];

function FeaturesSection() {
  return (
    <div className="py-20 bg-gray-50">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
        Why Choose GO GREEN ?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-0">
        {FEATURES_CONFIG.map(({ title, description, icon }) => (
          <div
            key={title}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
