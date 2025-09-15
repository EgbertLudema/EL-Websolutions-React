"use client";

import * as motion from "motion/react-client";
import { IoPeople, IoSearch, IoBrush } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";

const cardVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 32,
			mass: 0.8,
			// Delay each item based on its index
			delay: i * 0.2,
		},
	}),
};

export default function CardsSneek() {
	return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div
                custom={0}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                className="flex flex-col gap-4 justify-start p-8 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
            >
                
                <h3 className="flex flex-row gap-4 items-center m-0">
                    <div className="p-4 bg-slate-300 dark:bg-slate-800 rounded-md">
                        <IoPeople size={32} /> 
                    </div>
                    Persoonlijk contact
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                    Korte lijnen en iemand die meedenkt met jouw bedrijf.
                </p>
            </motion.div>

            <motion.div
                custom={1}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                className="flex flex-col gap-4 justify-start p-8 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
            >
                <h3 className="flex flex-row gap-4 items-center m-0">
                    <div className="p-4 bg-slate-300 dark:bg-slate-800 rounded-md">
                        <IoSearch size={32} />
                    </div>
                    SEO
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                    Standaard geoptimaliseerd voor zoekmachines zoals Google.
                </p>
            </motion.div>

            <motion.div
                custom={2}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                className="flex flex-col gap-4 justify-start p-8 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
            >
                <h3 className="flex flex-row gap-4 items-center m-0">
                    <div className="p-4 bg-slate-300 dark:bg-slate-800 rounded-md">
                        <IoBrush size={32} />
                    </div>
                    Maatwerk
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                    Alles wat ik maak is volledig afgestemd op de wensen van jou en jouw doelgroep.
                </p>
            </motion.div>

            <motion.div
                custom={3}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                className="flex flex-col gap-4 justify-start p-8 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
            >
                <h3 className="flex flex-row gap-4 items-center m-0">
                    <div className="p-4 bg-slate-300 dark:bg-slate-800 rounded-md">
                        <LuBrain size={32} />
                    </div>
                    Innovatief
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                    Ik blijf mij ontwikkelen en toepassen van de nieuwste tools en technologieën.
                </p>
            </motion.div>

        </div>
	);
}
