import { IconType } from "react-icons";

type Service = {
  icon: IconType;
  title: string;
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
    <main className="container mt-[100px] relative flex flex-row gap-8 py-8">
        <div className="w-full md:w1/2">
            <div className="-mb-4 gradient-bg rounded-lg p-4 flex items-center justify-center w-16 h-16 shadow-md">
                <Icon className="w-10 h-10 text-white" />
            </div>
            {service.image && (
                <img
                src={service.image}
                alt={service.title}
                className="mt-10 rounded-lg shadow-md max-w-full h-auto"
                />
            )}
        </div>
            
        <div className="w-full md:w1/2 flex flex-col items-start gap-4">
            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>

            <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
                {service.text}
            </p>
        </div>
    </main>
  );
};

export default ServiceHero;
