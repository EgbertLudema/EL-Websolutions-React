import * as motion from "motion/react-client";
import Link from "next/link";

import services from "@/data/services"

export default function Services(){
    return(
        <section className="py-20 shadow-md">
            <div className="container">
                <p className=" text-center sub-title mb-6">Diensten</p>
                <h2 className="text-center text-slate-900 dark:text-slate-100 mb-12">Wat ik bied</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-slate-50 dark:bg-slate-800 shadow-md p-6 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col gap-4 h-full"
                        >
                            {/* Top Content */}
                            <div>
                                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">
                                    {service.title}
                                </h3>
                                <p className="text-slate-700 dark:text-slate-200 mb-4">{service.description}</p>
                                <span className="text-primary font-medium">{service.price}</span>
                            </div>
                        
                            {/* Bottom Content pinned to bottom */}
                            <div className="mt-auto pt-4 border-t border-border">
                                <Link
                                    href={service.link}
                                    className="inline-flex items-center text-sm font-medium text-slate-900 dark:text-slate-100 hover:text-primary/80 dark:hover:text-primary/80 transition-colors"
                                >
                                    <div>Bekijk dienst</div>
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>                      
                    ))}
                </div>
            </div>
        </section>
    )
}