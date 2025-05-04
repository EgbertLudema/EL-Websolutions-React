import * as motion from "motion/react-client";
import { FaClock, FaMobileAlt, FaChartLine, FaHeadset } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { BsDiagram3 } from "react-icons/bs";

const reasons = [
  {
    icon: FaClock,
    title: "Snelle & Efficiënte Ontwikkeling",
    description: "Snelle oplevering dankzij een gestroomlijnd ontwikkelproces.",
  },
  {
    icon: IoMdPricetag,
    title: "Betaalbare Prijzen",
    description: "Hoogwaardige websites voor een concurrerende prijs.",
  },
  {
    icon: BsDiagram3,
    title: "Stapsgewijs Proces",
    description: "Ik doorloop meerdere fases voordat het ontwerp definitief is.",
    steps: ["Kennismaking", "Wireframing", "Design", "Ontwikkeling"],
  },
  {
    icon: FaMobileAlt,
    title: "Gebruiksvriendelijk & Mobiel Geoptimaliseerd",
    description: "Websites voor alle apparaten, met een soepele gebruikerservaring.",
  },
  {
    icon: FaChartLine,
    title: "SEO & Prestatiegericht",
    description: "Geoptimaliseerd voor zoekmachines en snelle laadtijden.",
  },
  {
    icon: FaHeadset,
    title: "Betrouwbare Support & Onderhoud",
    description: "Doorlopende ondersteuning om je site veilig en up-to-date te houden.",
  },
];

export default function USPS() {
    return (
        <section className="py-20 dark:border-b dark:border-slate-700">
            <div className="container">
                <p className="text-center sub-title mb-6">Waarom EL-Websolutions</p>
                <h2 className="text-center text-slate-900 dark:text-slate-100 mb-12">Wat mij onderscheidt</h2>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-slate-50 dark:bg-slate-900 shadow-md p-6 rounded-xl hover:shadow-lg flex flex-col gap-4 transition-all duration-300"
                >
                    <div className="flex items-center gap-4">
                    <div className="p-4 bg-white shadow-md dark:bg-slate-800 rounded-full">
                        <reason.icon className="text-2xl text-primary" />
                    </div>
                    <h3 className="text-lg text-slate-700 dark:text-slate-200 font-semibold">{reason.title}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-400">{reason.description}</p>
                    {reason.steps && (
                    <p className="mt-2 text-xs text-slate-800 dark:text-slate-200 font-medium">
                        {reason.steps.join(" > ")}
                    </p>
                    )}
                </motion.div>
                ))}
            </div>
        </section>
    );
}
