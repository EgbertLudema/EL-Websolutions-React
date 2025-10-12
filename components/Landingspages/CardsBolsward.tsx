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
            delay: i * 0.2,
        },
    }),
};

export default function CardsBolsward() {
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
                    <IoPeople className="text-primary" size={32} />
                </div>
                <h3 className="text-center m-0">Lokaal & betrokken</h3>
                <p className="text-center text-slate-600 dark:text-slate-400">
                    Gericht op ondernemers in <strong>Bolsward</strong> en omgeving. 
                    Korte lijnen, helder overleg en snelle afstemming zodat we vlot kunnen schakelen.
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
                    <IoSearch className="text-primary" size={32} />
                </div>
                <h3 className="text-center m-0">SEO die werkt</h3>
                <p className="text-center text-slate-600 dark:text-slate-400">
                    Technisch sterke basis + slimme contentstructuur. 
                    Beter gevonden worden in Google door klanten uit <strong>Bolsward</strong> en de regio.
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
                    <IoBrush className="text-primary" size={32} />
                </div>
                <h3 className="text-center m-0">Maatwerk webdesign</h3>
                <p className="text-center text-slate-600 dark:text-slate-400">
                    Geen generieke template, maar een ontwerp dat past bij jouw merk en doelgroep. 
                    Snel, gebruiksvriendelijk en conversiegericht.
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
                    <LuBrain className="text-primary" size={32} />
                </div>
                <h3 className="text-center m-0">Meedenkend & nuchter</h3>
                <p className="text-center text-slate-600 dark:text-slate-400">
                    Ik kijk verder dan je wensen alleen. 
                    Samen kiezen we wat écht werkt voor jouw klanten in <strong>Bolsward</strong>.
                </p>
            </motion.div>
        </div>
    );
}
