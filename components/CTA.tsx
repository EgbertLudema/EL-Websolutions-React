import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
    return (
        <section className="py-20 shadow-md gradient-bg dark:light-gradient-bg">
            <div className="container">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-center text-slate-100 mb-6">Klaar om wat nieuws te beginnen?</h2>
                    <p className="text-center text-slate-200 mb-6">
                        Ik sta open voor nieuwe projecten en hoor graag meer over jouw idee.
                    </p>
                    <Link
                        href="/contact"
                        className="group white-btn dark:gradient-btn shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-none flex flex-row items-center gap-2"
                    >
                        Neem contact op
                        <FaArrowRight className="group-hover:translate-x-1 transition" />
                    </Link>
                </div>
            </div>
        </section>
    );
}