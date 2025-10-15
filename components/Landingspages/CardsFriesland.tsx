"use client";

import * as motion from "motion/react-client";
import { IoMap, IoSpeedometer, IoStatsChart, IoShieldCheckmark } from "react-icons/io5";

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 400, damping: 32, mass: 0.8, delay: i * 0.2 },
    }),
};

export default function CardsFriesland() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div
                custom={0}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                className="flex flex-col gap-4 justify-start items-center p-8 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
            >
                <div className="p-4 bg-primary/20 rounded-md">
                    <IoMap className="text-primary" size={32} />
                </div>
                <h3 className="text-center m-0">Provinciebrede focus</h3>
                <p className="text-center text-slate-600 dark:text-slate-400">
                    Eén partner voor heel <strong>Friesland</strong>: stedelijk, dorpen en toeristische kernen. 
                    Korte lijnen, duidelijke communicatie.
                </p>
            </motion.div>

            <motion.div
                custom={1}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                className="flex flex-col gap-4 justify-start items-center p-8 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
            >
                <div className="p-4 bg-primary/20 rounded-md">
                    <IoSpeedometer className="text-primary" size={32} />
                </div>
                <h3 className="text-center m-0">Supersnel & schaalbaar</h3>
                <p className="text-center text-slate-600 dark:text-slate-400">
                    Performance-optimalisatie en slimme caching voor korte laadtijden en betere rankings.
                </p>
            </motion.div>

            <motion.div
                custom={2}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                className="flex flex-col gap-4 justify-start items-center p-8 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
            >
                <div className="p-4 bg-primary/20 rounded-md">
                    <IoStatsChart className="text-primary" size={32} />
                </div>
                <h3 className="text-center m-0">Conversie voorop</h3>
                <p className="text-center text-slate-600 dark:text-slate-400">
                    Duidelijke call-to-actions en logische user flows, gericht op aanvragen, afspraken en verkopen.
                </p>
            </motion.div>

            <motion.div
                custom={3}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                className="flex flex-col gap-4 justify-start items-center p-8 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
            >
                <div className="p-4 bg-primary/20 rounded-md">
                    <IoShieldCheckmark className="text-primary" size={32} />
                </div>
                <h3 className="text-center m-0">Langdurige support</h3>
                <p className="text-center text-slate-600 dark:text-slate-400">
                    Updates, beveiliging en doorontwikkeling. Je site groeit mee, zonder herbouw.
                </p>
            </motion.div>
        </div>
    );
}
