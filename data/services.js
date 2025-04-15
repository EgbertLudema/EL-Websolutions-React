import { LuPenTool, LuLaptop} from "react-icons/lu";
import { FaCartShopping, FaWordpress, FaAndroid, FaWrench } from "react-icons/fa6";
import { TbWorldSearch } from "react-icons/tb";

const services = [
    {
        icon: LuPenTool,
        title: "Wireframing",
        link: "/diensten/wireframing",
        description: "Wireframing for your website or app",
        text: "Wireframing is a crucial step in the design process that allows you to visualize the layout and functionality of your website or application before diving into the actual development. It serves as a blueprint, helping you to plan the user experience and interface effectively. By creating wireframes, you can identify potential issues early on, ensuring a smoother development process and a more user-friendly end product.",
        price: "From €59",
        tags: ["design", "website structure"],
        image: "/images/services/wireframes_thumbnail_nl.jpg",
        benefits: [
            "Visualize your ideas before development",
            "Identify usability issues early",
            "Align team and client expectations",
            "Save time and development cost",
            "Improve communication and feedback",
            "Enhance user experience design"
        ],
        process: [
            {
            title: "Discovery",
            description: "Understanding your business goals, target audience, and project requirements"
            },
            {
            title: "User Flows",
            description: "Mapping out how users will navigate through your digital product"
            },
            {
            title: "Information Architecture",
            description: "Organizing content and features in a logical, user-friendly structure"
            },
            {
            title: "Low-fidelity Wireframes",
            description: "Creating basic layouts to establish page structure and content hierarchy"
            },
            {
            title: "High-fidelity Prototypes",
            description: "Developing interactive prototypes that simulate the final experience"
            },
            {
            title: "User Testing",
            description: "Validating concepts with real users to refine the experience"
            }
        ],                    
        gallery: [
            {
                src: "/images/services/wireframes_thumbnail_nl.jpg",
                alt: "Low-fidelity wireframe for homepage"
            }
        ],
    },
    {
        icon: LuLaptop,
        title: "Custom web development",
        link: "/diensten/custom-web-development",
        description: "A custom website. Built with Next.js as front-end & WordPress as CMS",
        text: "Custom web development involves building websites tailored to your specific needs. Unlike template-based solutions, custom development ensures unique designs, optimized performance, and flexible functionality that align with your business goals. By leveraging Next.js for the front-end and WordPress as a CMS, I create scalable and SEO-friendly websites.",
        price: "Price: Depends on the project",
        tags: ["development", "Next.js", "WordPress", "CMS"],
        image: "/images/services/custom_web_thumbnail.jpg",
        benefits: [
            "Unique website tailored to your business",
            "Next.js frontend for top performance",
            "WordPress CMS for easy content editing",
            "Fully responsive and mobile-ready",
            "SEO-friendly with modern tech stack",
            "Built for scalability and future growth"
        ],
        process: [
            {
            title: "Project Planning",
            description: "Discuss your goals, required features, integrations, and target audience"
            },
            {
            title: "Wireframing & Architecture",
            description: "Create a sitemap and wireframes to structure the website and user flow"
            },
            {
            title: "Design & UI",
            description: "Design clean and responsive interfaces tailored to your brand"
            },
            {
            title: "Development",
            description: "Build the frontend in Next.js and connect WordPress as CMS"
            },
            {
            title: "Testing",
            description: "Ensure the site works across all devices and browsers"
            },
            {
            title: "Deployment & Handover",
            description: "Launch the site and provide support, access, and training"
            }
        ],          
        gallery: [
        ],
    },
    {
        icon: FaWordpress,
        title: "Wordpress website",
        link: "/diensten/wordpress",
        description: "Custom or theme-based websites built with WordPress",
        text: "WordPress is a powerful and flexible content management system that allows businesses to manage their online presence efficiently. I build custom WordPress websites, either from scratch or using pre-built themes, ensuring responsiveness, speed, and easy content management.",
        price: "From €449",
        tags: ["WordPress", "CMS", "custom or theme based", "plugins"],
        image: "/images/services/wordpress_thumbnail.jpg",
        benefits: [
            "Easily manage your own content",
            "Choose between custom or theme-based design",
            "Optimized for speed and SEO",
            "Secure and regularly updated setup",
            "Flexible with plugins and integrations",
            "Budget-friendly and fast to launch"
        ],
        process: [
            {
            title: "Requirement Gathering",
            description: "Understand your content, goals, and functional needs"
            },
            {
            title: "Theme or Custom Design",
            description: "Select a theme or build a fully custom WordPress theme"
            },
            {
            title: "Site Setup",
            description: "Install WordPress and configure base settings and plugins"
            },
            {
            title: "Page & Content Creation",
            description: "Build out the structure, templates, and fill in all content"
            },
            {
            title: "SEO & Performance",
            description: "Optimize the site for speed, search engines, and mobile devices"
            },
            {
            title: "Training & Launch",
            description: "Deliver the site and train you on how to manage content"
            }
        ],                   
        gallery: [
        ],
    },
    {
        icon: FaCartShopping,
        title: "Webshop",
        link: "/diensten/webshop",
        description: "Custom or theme-based webshops built with Shopify or WooCommerce",
        text: "E-commerce is the backbone of modern businesses, and I specialize in creating webshops using Shopify and WooCommerce. Whether it's a fully custom build or a theme-based solution, I ensure seamless user experience, secure transactions, and optimal performance.",
        price: "From €1299",
        tags: ["e-commerce", "woocommerce"],
        image: "/images/services/image_5.jpg",
        benefits: [
            "Sell products online securely",
            "WooCommerce or Shopify tailored setup",
            "Optimized for mobile shopping",
            "Smooth checkout and payment flow",
            "Scalable for growth and inventory",
            "Integrated analytics and reporting"
        ],
        process: [
            {
            title: "Product & Structure Planning",
            description: "Define your product types, categories, and shop structure"
            },
            {
            title: "Platform Setup",
            description: "Install and configure WooCommerce or set up your Shopify store"
            },
            {
            title: "Design & Branding",
            description: "Design a storefront that fits your brand and maximizes conversions"
            },
            {
            title: "Product Management",
            description: "Add products, images, variants, and descriptions"
            },
            {
            title: "Checkout & Payment Integration",
            description: "Set up secure payments, shipping, taxes, and customer flows"
            },
            {
            title: "Launch & Optimization",
            description: "Test the store and launch, then monitor and improve performance"
            }
        ],           
        gallery: [
        ],
    },
    {
        icon: TbWorldSearch,
        title: "Basic SEO",
        link: "/diensten/seo",
        description: "SEO for your website to rank higher on search engines",
        text: "Search Engine Optimization (SEO) improves your website’s visibility in search engine results. My SEO services include keyword optimization, site speed improvements, mobile-friendliness, and metadata enhancements to help your website rank higher and attract more organic traffic.",
        price: "Price: Depends on the project",
        tags: ["SEO", "visibility", "optimization"],
        image: "/images/services/seo_thumbnail.jpg",
        benefits: [
            "Improve your visibility in search engines",
            "Optimize technical and content elements",
            "Increase organic traffic over time",
            "Boost credibility and brand authority",
            "Better loading speeds and usability",
            "Track performance with analytics"
        ],
        process: [
            {
            title: "SEO Audit",
            description: "Review your website’s structure, speed, keywords, and content"
            },
            {
            title: "Keyword Research",
            description: "Identify relevant keywords based on competition and traffic potential"
            },
            {
            title: "Technical Optimization",
            description: "Fix speed, mobile, sitemap, and meta tag issues"
            },
            {
            title: "On-page SEO",
            description: "Improve content, headings, images, and internal linking"
            },
            {
            title: "Reporting & Analytics Setup",
            description: "Set up Google Search Console and Analytics for performance tracking"
            },
            {
            title: "Monitoring & Adjustments",
            description: "Review progress and make data-driven adjustments as needed"
            }
        ],          
        gallery: [
        ],
    },
    {
        icon: FaAndroid,
        title: "App Development",
        link: "/diensten/app-development",
        description: "Android app development with Jetpack Compose",
        text: "I develop high-performance Android applications using Jetpack Compose. My focus is on delivering user-friendly, scalable, and feature-rich mobile apps that enhance user experience and meet business objectives.",
        price: "Contact for more",
        tags: ["mobile", "android", "Jetpack Compose"],
        image: "/images/services/image_2.jpg",
        benefits: [
            "High-performance Android app",
            "Modern UI with Jetpack Compose",
            "Custom features based on your needs",
            "Optimized for all device sizes",
            "Secure and scalable architecture",
            "Smooth animations and native feel"
        ],
        process: [
            {
            title: "Concept & Strategy",
            description: "Define app purpose, core features, user base, and target devices"
            },
            {
            title: "Wireframes & User Flow",
            description: "Design the screen flow and interactions to map user journeys"
            },
            {
            title: "Jetpack Compose UI",
            description: "Build clean, responsive interfaces using modern Android tools"
            },
            {
            title: "Backend & API Integration",
            description: "Connect your app to databases, services, or third-party APIs"
            },
            {
            title: "Testing & Debugging",
            description: "Test the app on various devices to ensure performance and stability"
            },
            {
            title: "Play Store Launch",
            description: "Publish your app and handle updates, feedback, and analytics"
            }
        ],                  
        gallery: [
        ],
    },
    {
        icon: FaWrench,
        title: "Maintenance & Support",
        link: "/diensten/maintenance-support",
        description: "Maintenance and support for your website or app",
        text: "I provide ongoing maintenance and support services to ensure your website or app runs smoothly and stays up-to-date. Whether it's fixing bugs, adding new features, or updating content, I offer reliable support to keep your digital presence in top shape.",
        price: "From €19/month",
        tags: ["maintenance", "support", "updates", "custom plugins"],
        image: "/images/services/mainenance&support_thumbnail(example).jpg",
        benefits: [
            "Ongoing website or app updates",
            "Bug fixing and performance monitoring",
            "Security patches and backups",
            "New feature additions when needed",
            "Quick response to urgent issues",
            "Peace of mind with professional support"
        ],
        process: [
            {
            title: "Assessment & Onboarding",
            description: "Evaluate your system and set up access and communication channels"
            },
            {
            title: "Monitoring & Backups",
            description: "Set up regular backups and uptime monitoring"
            },
            {
            title: "Updates & Security",
            description: "Apply CMS, plugin, or system updates and monitor for vulnerabilities"
            },
            {
            title: "Bug Fixing & Issue Resolution",
            description: "Resolve any issues promptly and document changes"
            },
            {
            title: "Feature Enhancements",
            description: "Add or tweak features based on user feedback and needs"
            },
            {
            title: "Monthly Reports & Reviews",
            description: "Share insights and recommendations to improve your system"
            }
        ],          
        gallery: [
        ],
    }
];

export default services;