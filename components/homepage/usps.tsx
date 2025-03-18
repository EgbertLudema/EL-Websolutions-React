import * as motion from "motion/react-client";
import Link from "next/link";
import { FaClock, FaMobileAlt, FaChartLine, FaHeadset } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { BsDiagram3 } from "react-icons/bs";

const reasons = [
  {
    icon: FaClock,
    title: "Fast & Efficient Development",
    description: "Quick turnaround times with a streamlined development process.",
  },
  {
    icon: IoMdPricetag,
    title: "Affordable Pricing",
    description: "High-quality websites at competitive prices.",
  },
  {
    icon: BsDiagram3,
    title: "Step-by-Step Process",
    description: "I go through multiple phases before finalizing a design.",
    steps: ["Consultation", "Wireframing", "Design", "Development"],
  },
  {
    icon: FaMobileAlt,
    title: "User-Friendly & Mobile-Optimized",
    description: "Websites designed for all devices, ensuring a smooth user experience.",
  },
  {
    icon: FaChartLine,
    title: "SEO & Performance Focused",
    description: "Optimized for search engines and fast loading speeds.",
  },
  {
    icon: FaHeadset,
    title: "Reliable Support & Maintenance",
    description: "Ongoing support to keep your website updated and secure.",
  },
];

export default function USPS() {
  return (
    <section className="py-20 dark:border-b dark:border-slate-700">
      <div className="container">
        <p className="text-center sub-title mb-6">Why choose me</p>
        <h2 className="text-center mb-12">What sets me apart</h2>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-slate-50 dark:bg-slate-900 shadow-md p-6 rounded-xl hover:shadow-lg flex flex-col gap-4 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white shadow-md dark:bg-slate-800 rounded-full">
                <reason.icon className="text-2xl text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{reason.title}</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-400">{reason.description}</p>
            {reason.steps && (
              <p className="mt-2 text-xs text-muted-foreground font-medium">
                {reason.steps.join(" > ")}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}