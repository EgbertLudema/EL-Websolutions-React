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
				className="flex flex-col gap-4 justify-start items-center p-8 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
			>
				<div className="p-4 bg-primary/20 rounded-md">
					<IoPeople className="text-primary" size={32} />
				</div>
				<h3 className="text-center m-0">Persoonlijk contact</h3>
				<p className="text-center text-slate-600 dark:text-slate-400">
					Ik geloof in korte lijnen en duidelijke communicatie. Al het contact is direct met mij. 
                    Zo ontstaan er geen onduidelijkheden en kunnen wij veel sneller schakelen.
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
				<h3 className="text-center m-0">SEO</h3>
				<p className="text-center text-slate-600 dark:text-slate-400">
					Elke website die ik oplever is standaard geoptimaliseerd voor zoekmachines zoals Google. 
					Zo zorg ik ervoor dat jouw bedrijf beter vindbaar is, waardoor je meer bezoekers krijgt.
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
				<h3 className="text-center m-0">Maatwerk</h3>
				<p className="text-center text-slate-600 dark:text-slate-400">
					Geen standaard templates, maar een ontwerp en ontwikkeling die volledig zijn afgestemd op 
					jouw wensen en die van je doelgroep. Zo krijg je een unieke oplossing die echt bij je merk past.
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
				<h3 className="text-center m-0">Meedenkend</h3>
				<p className="text-center text-slate-600 dark:text-slate-400">
					In plaats van simpelweg jouw wensen uit te voeren, kijk ik verder. Zo kijk ik verder dan alleen jouw wensen, maar naar wat echt werkt voor jouw doelgroep.
				</p>
			</motion.div>
		</div>
	);
}
