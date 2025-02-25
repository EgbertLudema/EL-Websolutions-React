import * as motion from "motion/react-client";
import Link from "next/link";
import { FaCartShopping, FaWordpress, FaAndroid } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { TbWorldSearch } from "react-icons/tb";
import { BsCode } from "react-icons/bs";

const services = [
  {
    icon: MdDesignServices,
    title: "UI/UX Design",
    description: "User-centric design solutions that enhance user experience",
    price: "From €499",
  },
  {
    icon: BsCode,
    title: "Custom web development",
    description: "Custom websites and web applications built with modern technologies",
    price: "From €899",
  },
  {
    icon: FaWordpress,
    title: "Wordpress website",
    description: "Custom or theme-based websites built with Wordpress",
    price: "From €449",
  },
  {
    icon: FaCartShopping,
    title: "Webshop",
    description: "Custom or theme based webshops built with Shopify or Woocommerce",
    price: "From €1299",
  },
  {
    icon: TbWorldSearch,
    title: "Basic SEO optimization",
    description: "SEO for your website to rank higher on search engines",
    price: "Depends on the project",
  },
  {
    icon: FaAndroid,
    title: "App Development",
    description: "Android app development with Jetpack Compose",
    price: "Contact for more",
  }
];

export default function Services(){
    return(
        <section className="py-20 shadow-md">
            <div className="container">
                <p className=" text-center sub-title mb-6">Services</p>
                <h2 className="text-center mb-6">What I Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-neutral-50 dark:bg-neutral-900 shadow-md p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">{service.description}</p>
                            <span className="text-primary font-medium">{service.price}</span>
                            <div className="mt-4 pt-4 border-t border-border">
                                <Link
                                // TODO: Add href to services
                                href="#"
                                className="inline-flex items-center text-sm font-medium text-black dark:text-white hover:text-primary/80 dark:hover:text-primary/80 transition-colors"
                                >
                                  <div>
                                    Learn more
                                  </div>
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