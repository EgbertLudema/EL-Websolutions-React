import * as motion from "motion/react-client";
import { FaHeadset, FaMobileAlt } from "react-icons/fa";
import { BsDiagram3 } from "react-icons/bs";
import { FaCode, FaHandshake, FaShopify } from "react-icons/fa6";

const reasons = [
    {
        icon: FaHandshake,
        title: "Flexibel inzetbaar",
        description: "Ik sluit snel aan op bestaande teams, planningen en projectflows zonder onnodige overhead.",
    },
    {
        icon: FaCode,
        title: "Maatwerk websites",
        description: "Websites die passen bij je merk en doelen, met aandacht voor snelheid, structuur en schaalbaarheid.",
    },
    {
        icon: FaShopify,
        title: "Shopify maatwerk",
        description: "Custom secties, templates en uitbreidingen die beter aansluiten op branding, content en conversie.",
    },
    {
        icon: BsDiagram3,
        title: "Heldere aanpak",
        description: "Je weet waar je aan toe bent dankzij duidelijke scope, korte lijnen en gestructureerde oplevering.",
        steps: ["Intake", "Scope", "Ontwikkeling", "Oplevering"],
    },
    {
        icon: FaMobileAlt,
        title: "Oog voor detail",
        description: "Ik houd rekening met UX, UI, inhoud en interactie, zodat het totaal klopt en prettig werkt op ieder scherm.",
    },
    {
        icon: FaHeadset,
        title: "Onderhoud en doorontwikkeling",
        description: "Ook na oplevering kun je rekenen op support, optimalisaties en technische doorbouw.",
    },
];

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 16,
    },
    show: {
        opacity: 1,
        y: 0,
    },
};

export default function USPS() {
    return (
        <section className="py-20 dark:border-b dark:border-slate-700">
            <div className="container">
                <p className="text-center sub-title mb-6">Waarom samenwerken</p>
                <h2 className="text-center text-slate-900 dark:text-slate-100 mb-12">
                    Development die aansluit op je project en manier van werken
                </h2>
            </div>

            <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={`${reason.title}-${reason.steps ? reason.steps.join("-") : "no-steps"}`}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{
                            once: true,
                            amount: 0.3,
                            margin: "0px 0px -10% 0px",
                        }}
                        transition={{
                            duration: 0.45,
                            delay: index * 0.08,
                            ease: "easeOut",
                        }}
                        style={{
                            willChange: "transform, opacity",
                            backfaceVisibility: "hidden",
                            transform: "translateZ(0)",
                        }}
                        className="
                            group bg-slate-50 dark:bg-slate-900 shadow-md p-6 rounded-xl
                            hover:shadow-lg flex flex-col gap-4
                            transition-shadow duration-300
                            [transform:translateZ(0)] [backface-visibility:hidden]
                        "
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-white shadow-md dark:bg-slate-800 rounded-full">
                                <reason.icon className="text-2xl text-primary" />
                            </div>
                            <h3 className="text-lg text-slate-700 dark:text-slate-200 font-semibold">
                                {reason.title}
                            </h3>
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
