"use client";

import * as motion from "motion/react-client";
import { PiNumberSquareOneBold, PiUserBold } from "react-icons/pi";
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

export default function MyValues() {
	return (
		<section className="container my-12">
			<h2 className="text-center text-slate-700 dark:text-slate-300">Mijn waarden</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
				<motion.div
					custom={0}
					variants={cardVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.4 }}
					className="flex flex-col gap-4 justify-start p-8 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900"
				>
					<h3 className="flex flex-row gap-2 items-center m-0 text-slate-800 dark:text-slate-200">
						<PiNumberSquareOneBold /> Kwaliteit eerst
					</h3>
					<p className="text-slate-600 dark:text-slate-400">
						Niet alleen focus ik op het uiterlijk van een website, maar vooral de functionaliteit en de gebruiksvriendelijkheid.
					</p>
					<p className="text-slate-600 dark:text-slate-400">
						Dit doe ik d.m.v. een stapsgewijs ontwikkelproces.
					</p>
				</motion.div>

				<motion.div
					custom={1}
					variants={cardVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.4 }}
					className="flex flex-col gap-4 justify-start p-8 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900"
				>
					<h3 className="flex flex-row gap-2 items-center m-0 text-slate-800 dark:text-slate-200">
						<PiUserBold /> Meedenkend
					</h3>
					<p className="text-slate-600 dark:text-slate-400">
						Bij elke vraag van een klant, denk ik mee over de beste oplossing of of het wel nodig is.
					</p>
					<p className="text-slate-600 dark:text-slate-400">
						Zo kijk ik verder dan de wensen van de klant, maar vooral naar de doelgroep/gebruikers.
					</p>
				</motion.div>

				<motion.div
					custom={2}
					variants={cardVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.4 }}
					className="flex flex-col gap-4 justify-start p-8 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900"
				>
					<h3 className="flex flex-row gap-2 items-center m-0 text-slate-800 dark:text-slate-200">
						<LuBrain /> Altijd blijven leren
					</h3>
					<p className="text-slate-600 dark:text-slate-400">
						Ik ben altijd op zoek naar manieren om websites te verbeteren en mijn vaardigheden uit te breiden d.m.v. nieuwe technologieën.
					</p>
					<p className="text-slate-600 dark:text-slate-400">
						Zo verdiep ik mij regelmatig in nieuwe tools en frameworks.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
