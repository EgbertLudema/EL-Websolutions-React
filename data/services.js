import { LuPenTool, LuLaptop} from "react-icons/lu";
import { FaCartShopping, FaWordpress, FaAndroid, FaWrench } from "react-icons/fa6";
import { TbWorldSearch } from "react-icons/tb";

const services = [
    {
        icon: LuPenTool,
        title: "Wireframing",
        link: "/diensten/wireframing",
        description: "Een blauwdruk voor je website om een visueel idee te krijgen van de structuur en functionaliteit",
        text: "Wireframing is een cruciale stap in het ontwerpproces die je in staat stelt om de lay-out en functionaliteit van je website of applicatie te visualiseren voordat je aan de daadwerkelijke ontwikkeling begint. Het functioneerd als een blauwdruk, die je helpt om de gebruikerservaring en interface effectief te plannen. Door wireframes te maken, kun je potentiële problemen vroegtijdig identificeren, wat zorgt voor een soepelere ontwikkelingsproces en een gebruiksvriendelijker eindproduct.",
        price: "Vanaf €59",
        tags: ["design", "website structuur", "gebruikerservaring"],
        image: "/images/services/Wireframing_image.jpg",
        benefits: [
            "Eerst een visueel idee van de website",
            "Bespaar tijd en geld in de ontwikkelingsfase",
            "Snel en goedkoop een idee krijgen van de website",
            "Vroegtijdig problemen identificeren",
            "Vermijd (dure) wijzigingen in latere fasen"
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
        description: "Een op maat gemaakte website. Gebouwd met Next.js als front-end & WordPress als CMS",
        text: "Maatwerk webontwikkeling houdt in dat websites worden gebouwd die zijn afgestemd op jouw specifieke behoeften. In tegenstelling tot op sjablonen gebaseerde oplossingen zorgt maatwerk voor unieke ontwerpen, geoptimaliseerde prestaties en flexibele functionaliteit die aansluiten bij jouw bedrijfsdoelen. Door Next.js voor de front-end en WordPress als CMS te gebruiken, creëer ik schaalbare en SEO-vriendelijke websites.",
        price: "Prijs: Afhankelijk van het project",
        tags: ["ontwikkeling", "Next.js", "WordPress", "CMS"],
        image: "/images/services/custom_web_thumbnail.jpg",
        benefits: [
            "Unieke website op maat gemaakt voor jouw bedrijf",
            "Next.js frontend voor top prestaties",
            "WordPress CMS voor eenvoudig contentbeheer",
            "Volledig responsief en mobielvriendelijk",
            "SEO-vriendelijk met moderne technologie",
            "Gebouwd voor schaalbaarheid en toekomstige groei"
        ],
        process: [
            {
            title: "Projectplanning",
            description: "Invetariseren wat er al is en wat er nog moet komen. Bespreken van je doelen, vereiste functies, integraties, budget en de tijdlijn."
            },
            {
            title: "Wireframing(optioneel, maar aanbevolen)",
            description: "Ik maak desktop wireframes om de website en gebruikersstroom te structureren. Dit helpt bij het visualiseren van de lay-out en functionaliteit voordat de ontwikkeling begint."
            },
            {
            title: "Ontwerp",
            description: "Dekstop ontwerp van je website in Figma."
            },
            {
            title: "Ontwikkeling",
            description: "Bouw de frontend in Next.js en verbind WordPress als CMS."
            },
            {
            title: "Testen",
            description: "Ik zorg ervoor dat de site op alle apparaten en browsers werkt."
            },
            {
            title: "Implementatie & Overdracht",
            description: "De website gaat live, waarna ik een korte training geef over het gebruik en het aanpassen van de content. Daarnaast lever ik een gratis handleiding mee."
            },
            {
            title: "Support & onderhoud(optioneel)",
            description: "Ik bied verschillende pakketten aan voor onderhoud en support."
            }

        ],        
        gallery: [
        ],
    },
    {
        icon: FaWordpress,
        title: "Wordpress website",
        link: "/diensten/wordpress",
        description: "Ik maak op maat gemaakte Wordpress websites d.m.v. de Oxygen builder",
        text: "WordPress is een krachtig en flexibel contentmanagementsysteem(CMS) waarmee bedrijven hun online aanwezigheid efficiënt kunnen beheren. Ik bouw op maat gemaakte WordPress-websites, dit doe ik d.m.v. de Oxygen builder. Op deze manier kan ik een website maken die volledig is afgestemd op jouw wensen. Er zullen dus ook geen andere websites zijn die op die van jou lijken!",
        price: "Vanaf €649",
        tags: ["WordPress", "CMS", "Oxygen builder", "custom plugins"],
        image: "/images/services/wordpress_thumbnail.jpg",
        benefits: [
            "Eenvoudig je eigen content beheren",
            "Oxygen Builder voor maatwerk ontwerpen",
            "Responsief en mobielvriendelijk",
            "Geoptimaliseerd voor snelheid en SEO",
            "Veilige en regelmatig bijgewerkte setup",
            "Flexibel met plugins en integraties",
            "Budgetvriendelijk en snel te lanceren"
        ],
        process: [
            {
            title: "Intake gesprek",
            description: "Ik kom bij je langs om je wensen en doelen te bespreken en om te invetariseren wat er al is en wat er nog moet komen. Dit kan ook online via een videogesprek."
            },
            {
            title: "Wireframes(optioneel)",
            description: "Ik maak een wireframe van de website om een idee te krijgen van de structuur en de functionaliteiten van de website."
            },
            {
            title: "Ontwerp(indien nog niet aanwezig)",
            description: "Ik maak een ontwerp van de website in Figma. Dit is een visueel ontwerp van de website."
            },
            {
            title: "Platforminrichting",
            description: "Installatie van Wordpress"
            },
            {
            title: "Ontwikkeling",
            description: "Ik bouw de website in WordPress d.m.v. de Oxygen builder."
            },
            {
            title: "Testen",
            description: "Ik zorg ervoor dat de website op alle apparaten en browsers werkt."
            },
            {
            title: "Implementatie & Overdracht",
            description: "De website gaat live, waarna ik een korte training geef over het gebruik en het aanpassen van de content. Daarnaast lever ik een gratis handleiding mee."
            }
        ],               
        gallery: [
        ],
    },
    {
        icon: FaCartShopping,
        title: "Webshop",
        link: "/diensten/webshop",
        description: "Custom webshops gebouwd met Woocommerce d.m.v. de Oxygen builder of thema gebaseerd",
        text: "E-commerce is de ruggengraat van moderne bedrijven, en ik ben gespecialiseerd in het creëren van webshops met WooCommerce. Of het nu gaat om een volledig op maat gemaakte oplossing of een thema-gebaseerde oplossing, ik zorg voor een naadloze gebruikerservaring, veilige transacties en optimale prestaties,",
        price: "Vanaf €1299",
        tags: ["e-commerce", "woocommerce" , "webshop", "Oxygen builder", "custom plugins", "CMS"],
        image: "/images/services/image_5.jpg",
        benefits: [
            "Verkoop producten online op een veilige manier",
            "Op maat gemaakte Woocommerce webshop",
            "Geoptimaliseerd voor mobiel winkelen",
            "Vlotte checkout en betalingsafhandeling",
            "Custom plugins voor unieke functies",
            "Geïntegreerde analyses en rapportages"
        ],
        process: [
            {
                title: "Intake gesprek",
                description: ""
            },
            {
                title: "Wireframes(optioneel)",
                description: "Ik maak een wireframe van de website om een idee te krijgen van de structuur en de functionaliteiten van de website."
            },
            {
                title: "Ontwerp(indien nog niet aanwezig)",
                description: "Ik maak een ontwerp van de website in Figma. Dit is een visueel ontwerp van de website."
            },
            {
                title: "Ontwikkeling",
                description: "Ik bouw de website in WordPress d.m.v. de Oxygen builder."
            },
            {
                title: "Testen",
                description: "Ik zorg ervoor dat de website op alle apparaten en browsers werkt."
            },
            {
                title: "Implementatie & Overdracht",
                description: "De website gaat live, waarna ik een korte training geef over het gebruik en het aanpassen van de content. Daarnaast lever ik een gratis handleiding mee."
            },
            {
                title: "Lancering & Optimalisatie",
                description: "Test de webshop en lanceer deze, daarna monitoren en prestaties verbeteren"
            }
        ],        
        gallery: [
        ],
    },
    {
        icon: TbWorldSearch,
        title: "Basic SEO",
        link: "/diensten/seo",
        description: "SEO om je website hoger te ranken in zoekmachines",
        text: "Zoekmachineoptimalisatie (SEO) verbetert de zichtbaarheid van je website in zoekmachines. Mijn SEO-diensten omvatten het optimaliseren van zoekwoorden, het verbeteren van de snelheid van de site, mobielvriendelijkheid en metadata-verbeteringen om je website hoger te laten ranken en meer organisch verkeer aan te trekken.",
        price: "Prijs: Afhankelijk van het project",
        tags: ["SEO", "visibility", "optimization"],
        image: "/images/services/seo_image.jpg",
        benefits: [
            "Verbeter je zichtbaarheid in zoekmachines",
            "Optimaliseer technische en inhoudelijke elementen",
            "Verhoog organisch verkeer in de loop van de tijd",
            "Versterk geloofwaardigheid en merkautoriteit",
            "Betere laadsnelheden en gebruiksvriendelijkheid",
        ], 
        process: [
            {
            title: "SEO Audit",
            description: "Beoordeel de structuur, snelheid, zoekwoorden en inhoud van je website"
            },
            {
            title: "Zoekwoordenonderzoek",
            description: "Identificeer relevante zoekwoorden op basis van concurrentie en verkeerspotentieel"
            },
            {
            title: "Technische optimalisatie",
            description: "Los problemen met snelheid, mobiel, sitemap en meta-tags op"
            },
            {
            title: "On-page SEO",
            description: "Verbeter inhoud, koppen, afbeeldingen en interne links"
            },
            {
            title: "Rapportage & Analytics Setup",
            description: "Stel Google Search Console en Analytics in voor prestatiemonitoring"
            }
        ],        
        gallery: [
        ],
    },
    // {
    //     icon: FaAndroid,
    //     title: "App Development",
    //     link: "/diensten/app-development",
    //     description: "Android app development met Jetpack Compose",
    //     text: "Ik ontwikkel hoogwaardige Android-applicaties met Jetpack Compose. Mijn focus ligt op het leveren van gebruiksvriendelijke, schaalbare en functie-rijke mobiele apps die de gebruikerservaring verbeteren en voldoen aan de bedrijfsdoelstellingen.",
    //     price: "Neem contact op",
    //     tags: ["mobiel", "Android", "Jetpack Compose"],
    //     image: "/images/services/image_2.jpg",
    //     benefits: [
    //         "Hogere prestaties en snelheid",
    //         "Moderne UI met Jetpack Compose",
    //         "Maatwerk functies op basis van jouw wensen",
    //         "Geoptimaliseerd voor alle schermformaten",
    //         "Veilige en schaalbare architectuur",
    //         "Vloeiende animaties en native gevoel"
    //     ],
    //     process: [
    //         {
    //         title: "Intake gesprek",
    //         description: "Definieer het doel van de app, kernfunctionaliteiten, gebruikersbasis en doelapparaten"
    //         },
    //         {
    //         title: "Wireframes",
    //         description: "Ik ontwerp een wirefram van de app om een visueel idee te krijgen van de structuur en de functionaliteiten van de app"
    //         },
    //         {
    //         title: "Jetpack Compose UI",
    //         description: "Ik begin met het bouwen van de app d.m.v. Jetpack Compose."
    //         },
    //         {
    //         title: "Backend & API-integratie",
    //         description: "Ik verbind je app met databases, services of externe API's"
    //         },
    //         {
    //         title: "Testen & Debuggen",
    //         description: "Test de app op verschillende apparaten om prestaties en stabiliteit te waarborgen"
    //         },
    //         {
    //         title: "Play Store Lancering",
    //         description: "Ik publiceer je app in de Play Store"
    //         }
    //     ],                  
    //     gallery: [
    //     ],
    // },
    {
        icon: FaWrench,
        title: "Onderhoud & support",
        link: "/diensten/maintenance-support",
        description: "Ondersteuning en onderhoud voor je website",
        text: "Ik bied doorlopende onderhouds- en ondersteuningsdiensten om ervoor te zorgen dat je website soepel blijft draaien en up-to-date blijft. Of het nu gaat om het oplossen van bugs, het toevoegen van nieuwe functies of het bijwerken van inhoud, ik bied betrouwbare ondersteuning om je digitale aanwezigheid in topvorm te houden.",
        price: "Vanaf €19/maand",
        tags: ["onderhoud", "support", "updates", "custom plugins", "monitoring"],
        image: "/images/services/Maintenancesupport_image.jpg",
        benefits: [
            "Doorlopende updates van je website",
            "Bugfixes en prestatiemonitoring",
            "Beveiligingspatches en back-ups",
            "Nieuwe functies toevoegen wanneer nodig",
            "Snelle reactie op urgente problemen",
            "Professionele ondersteuning"
        ],
        process: [
            {
            title: "Intake gesprek",
            description: "Wensen en doelen bespreken, website inventariseren, pakket bepalen"
            },
            {
            title: "1 malige setup",
            description: "Installatie van onderhouds plugins, eigen plugins en monitoring tools, alles updaten naar de laatste versie"
            },
            {
            title: "Maandelijkse updates",
            description: "Maandelijks automatische updates van plugins en thema's, en handmatige updates van Wordpress(indien er een nieuwe versie is) na het maken van een back-up"
            },
            {
            title: "Maandelijkse support uren",
            description: "Afhankelijk van het pakket, 1-5 uur per maand om bugs op te lossen, nieuwe functies toe te voegen of andere aanpassingen te maken"
            },
            {
            title: "Support",
            description: "Snelle reactie op urgente problemen, en ondersteuning bij vragen"
            }
        ],          
        gallery: [
        ],
    }
];

export default services;