import { LuPenTool, LuLaptop} from "react-icons/lu";
import { FaCartShopping, FaWordpress, FaAndroid, FaWrench } from "react-icons/fa6";
import { TbWorldSearch } from "react-icons/tb";

const services = [
    {
        icon: LuPenTool,
        title: "Wireframing",
        link: "/services/wireframing",
        description: "Wireframing for your website or app",
        text: "Wireframing is a way to design a website service at the structural level. A wireframe is commonly used to lay out content and functionality on a page. Wireframes are used early in the development process to establish the basic structure of a page before visual design and content is added.",
        price: "From €59",
        tags: ["design", "website structure"],
        image: "path/to/image/",
    },
    {
        icon: LuLaptop,
        title: "Custom web development",
        link: "/services/custom-web-development",
        description: "A custom website. Built with Next.js as front-end & WordPress as CMS.",
        text: "Custom web development involves building websites tailored to your specific needs. Unlike template-based solutions, custom development ensures unique designs, optimized performance, and flexible functionality that align with your business goals. By leveraging Next.js for the front-end and WordPress as a CMS, I create scalable and SEO-friendly websites.",
        price: "Depends on the project",
        tags: ["development", "custom", "scalable", "Next.js", "WordPress", "CMS"],
        image: "path/to/image/",
    },
    {
        icon: FaWordpress,
        title: "WordPress website",
        link: "/services/wordpress",
        description: "Custom or theme-based websites built with WordPress",
        text: "WordPress is a powerful and flexible content management system that allows businesses to manage their online presence efficiently. I build custom WordPress websites, either from scratch or using pre-built themes, ensuring responsiveness, speed, and easy content management.",
        price: "From €449",
        tags: ["WordPress", "CMS"],
        image: "path/to/image/",
    },
    {
        icon: FaCartShopping,
        title: "Webshop",
        link: "/services/webshop",
        description: "Custom or theme-based webshops built with Shopify or WooCommerce",
        text: "E-commerce is the backbone of modern businesses, and I specialize in creating webshops using Shopify and WooCommerce. Whether it's a fully custom build or a theme-based solution, I ensure seamless user experience, secure transactions, and optimal performance.",
        price: "From €1299",
        tags: ["e-commerce", "shopify", "woocommerce"],
        image: "path/to/image/",
    },
    {
        icon: TbWorldSearch,
        title: "Basic SEO optimization",
        link: "/services/seo",
        description: "SEO for your website to rank higher on search engines",
        text: "Search Engine Optimization (SEO) improves your website’s visibility in search engine results. My SEO services include keyword optimization, site speed improvements, mobile-friendliness, and metadata enhancements to help your website rank higher and attract more organic traffic.",
        price: "Depends on the project",
        tags: ["SEO", "visibility", "optimization"],
        image: "path/to/image/",
    },
    {
        icon: FaAndroid,
        title: "App Development",
        link: "/services/app-development",
        description: "Android app development with Jetpack Compose",
        text: "I develop high-performance Android applications using Jetpack Compose. My focus is on delivering user-friendly, scalable, and feature-rich mobile apps that enhance user experience and meet business objectives.",
        price: "Contact for more",
        tags: ["mobile", "android", "Jetpack Compose"],
        image: "path/to/image/",
    },
    {
        icon: FaWrench,
        title: "Maintenance & Support",
        link: "/services/maintenance-support",
        description: "Maintenance and support for your website or app",
        text: "I provide ongoing maintenance and support services to ensure your website or app runs smoothly and stays up-to-date. Whether it's fixing bugs, adding new features, or updating content, I offer reliable support to keep your digital presence in top shape.",
        price: "From €29/month",
        tags: ["maintenance", "support", "updates", "custom plugins"],
        image: "path/to/image/",
    }
];

export default services;