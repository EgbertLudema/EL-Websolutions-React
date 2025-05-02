import { IconType } from "react-icons";
import Breadcrumbs from "../Breadcrumbs";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

type Service = {
    icon: IconType;
    title: string;
    price: string;
    description: string;
    text: string;
    image?: string;
};

type ServiceHeroProps = {
    service: Service;
};

const ServiceHero = ({ service }: ServiceHeroProps) => {
    const Icon = service.icon;

    return (
        <main className="container mt-[100px] py-8">
            <Breadcrumbs />
            <div className="relative flex flex-col md:flex-row gap-8 ">
                <div className="relative w-full md:w-1/2">
                    <div className="absolute top-0 l-0 z-20 gradient-bg rounded-lg p-4 flex items-center justify-center w-16 h-16 shadow-md">
                        <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="relative z-10 mt-4 ml-4">
                    {service.image && (
                        <Image
                            src={service.image}
                            alt={service.title}
                            className="rounded-lg shadow-md max-w-full h-auto"
                        />
                    )}
                    </div>
                </div>
                    
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-8">
                    <h1 className="text-4xl font-bold">{service.title}</h1>

                    <p className="text-xl font-bold text-primary">{service.price}</p>

                    <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
                        {service.description}
                    </p>

                    <Link href="/contact" className="group gradient-btn py-2 px-4 flex flex-row items-center gap-2">
                        Get started
                        <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition" />
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ServiceHero;
