import { LuPenTool, LuLaptop} from "react-icons/lu";
import { FaCartShopping, FaWordpress, FaWrench } from "react-icons/fa6";
import { TbWorldSearch } from "react-icons/tb";

const services = [
    {
        icon: LuPenTool,
        title: "Wireframing",
        link: "/diensten/wireframing",
        description: "Een blauwdruk van je website idee te krijgen van de structuur en functionaliteit",
        text: "Wireframing is een stap in het ontwerpproces die je in staat stelt om de lay-out en functionaliteit van je website of applicatie te visualiseren voordat je aan de daadwerkelijke ontwikkeling begint. Het functioneerd als een blauwdruk, die je helpt om de gebruikerservaring en interface effectief te plannen. Door wireframes te maken, kun je potentiële problemen vroegtijdig identificeren, wat zorgt voor een soepelere ontwikkelingsproces en een gebruiksvriendelijker eindproduct.",
        price: "Vanaf €59",
        tags: ["design", "website structuur", "gebruikerservaring"],
        image: "/images/services/Wireframing_image.jpg",
        benefits: [
            "Eerst een visueel idee van de website",
            "Bespaar tijd en geld in de ontwikkelingsfase",
            "Snel en goedkoop een idee krijgen van de website",
            "Gebruikers ervaring eerst",
            "Vroegtijdig problemen identificeren",
            "Vermijd (dure) wijzigingen in latere fasen"
        ], 
        process: [
            {
            title: "Invetariseren",
            description: "Bespreken van je doelen, wensen, vereiste functies en integraties."
            },
            {
            title: "Wireframing",
            description: "Ik maak desktop wireframes om de website en gebruikersstroom te structureren. Dit helpt bij het visualiseren van de lay-out en functionaliteit voordat de ontwikkeling begint."
            },
            {
            title: "Tussenpresentatie",
            description: "Wij gaan samen zitten om te kijken of de website structuur naar wens is."
            },
            {
            title: "Indien nodig, aanpassingen(tot 2 rivisies)",
            description: "Ik pas de gemaakte wireframes aan naar wens waarbij ik rekening houdt met de gebruiker."
            },
            {
            title: "Oplevering",
            description: "Ik lever de wireframes op."
            },
            {
            title: "Vervolg stap(optioneel)",
            description: "Indien gewenst, maak ik, op basis van de wireframe structuur, een ontwerp van de website."
            },
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
        text: "WordPress is een krachtig en flexibel contentmanagementsysteem(CMS) waarmee bedrijven hun online aanwezigheid efficiënt kunnen beheren. Ik bouw op maat gemaakte WordPress-websites, dit doe ik d.m.v. de Oxygen builder. Op deze manier kan ik een op maat gemaakte website maken die volledig is afgestemd op jouw wensen. Daarnaast gebruikt de Oxygenbuilder alleen de benodigde code, in tegenstelling tot standaard Wordpress thema's, waardoor de website snel en licht is.",
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
        description: "Custom webshops d.m.v. Woocommerce met de Oxygen builder of Shopify",
        text: "Een webshop is een essentieel onderdeel van een winkel. Het stelt bedrijven in staat om producten online te verkopen en een breder publiek te bereiken. Ik bouw op maat gemaakte WooCommerce en shopify webshops, die zijn geoptimaliseerd voor conversie en gebruiksvriendelijkheid. Na het opleveren van een webshop, geef ik een korte training over het gebruik en aanpassen van de content waarna de webshop geheel zelfstandig te beheren is.",
        price: "Vanaf €1499",
        tags: ["e-commerce", "shopify", "woocommerce" , "webshop", "custom plugins", "CMS"],
        image: "/images/services/image_5.jpg",
        benefits: [
            "Verkoop producten online op een veilige manier",
            "Op maat gemaakte Woocommerce of Shopify webshop",
            "Geoptimaliseerd voor mobiel winkelen",
            "Eenvoudig te beheren met WordPress",
            "Conversie gericht",
            "Vlotte checkout en betalingsafhandeling",
            "Custom plugins voor unieke functies",
            "Geïntegreerde analyses en rapportages"
        ],
        process: [
            {
                title: "Intake gesprek",
                description: "In het eerste gesprek bespreken we je wensen en doelen. Daarna inventariseren we wat er al is en wat er nog moet komen. Vervolgens bespreken we een budget en een tijdlijn waarna ik een offerte maak. Dit gesprek kan ook online gevoerd worden."
            },
            {
                title: "Wireframes(optioneel)",
                description: "Ik maak een wireframe van de webshop om een idee te krijgen van de structuur en de functionaliteiten van de webshop."
            },
            {
                title: "Ontwerp(indien nog niet aanwezig)",
                description: "Ik maak een ontwerp van de webshop."
            },
            {
                title: "Ontwikkeling",
                description: "Ik bouw de webshop in WordPress met Woocommerce d.m.v. de Oxygen builder."
            },
            {
                title: "Testen",
                description: "Ik zorg ervoor dat de webshop op alle apparaten en browsers werkt."
            },
            {
                title: "SEO(optioneel)",
                description: "Ik optimaliseer de webshop voor zoekmachines, zodat je beter vindbaar bent. Daarnaast is het mogelijk dat ik Google Search Console en Analytics voor je instel voor prestatiemonitoring."
            },
            {
                title: "Implementatie & Overdracht",
                description: "De webshop gaat live, waarna ik een korte training geef over het gebruik en het aanpassen van de content. Daarnaast lever ik een gratis handleiding mee."
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
        text: "Zoekmachineoptimalisatie (SEO) verbetert de zichtbaarheid van je website in zoekmachines. Mijn SEO-diensten omvatten het optimaliseren van elke pagina op meta-data, zoekwoorden, snelheid, mobielvriendelijkheid en ik help bij het instellen en monitoren van Google search console en analytics.",
        price: "Prijs: Afhankelijk van het project",
        tags: ["SEO", "Google Search Console", "Analytics"],
        image: "/images/services/seo_image.jpg",
        benefits: [
            "Verbeter je zichtbaarheid in zoekmachines",
            "Optimaliseer technische en inhoudelijke elementen",
            "Optimaliseer je website voor snelheid en mobiel",
            "Verhoog organisch verkeer in de loop van de tijd",
            "Inzicht in prestaties met Google Search Console en Analytics",
        ], 
        process: [
            {
            title: "SEO Audit",
            description: "Beoordeel de structuur, snelheid, zoekwoorden en inhoud van je website"
            },
            {
            title: "Offerte",
            description: "Maak op basis van de beoordeling een offerte voor de benodigde werkzaamheden"
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
        text: "Ik bied doorlopende onderhouds- en ondersteuningsdiensten om ervoor te zorgen dat je website soepel blijft draaien en up-to-date blijft. Of het nu gaat om het oplossen van bugs, het toevoegen van nieuwe functies of het bijwerken van inhoud, ik bied ondersteuning om je digitale aanwezigheid in topvorm te houden.",
        price: "Vanaf €14/maand",
        tags: ["onderhoud", "support", "updates", "custom plugins", "monitoring"],
        image: "/images/services/Maintenancesupport_image.jpg",
        benefits: [
            "Doorlopende updates van je website",
            "Bugfixes(uren afhankelijk van het pakket)",
            "Beveiligingspatches en back-ups",
            "Nieuwe functies toevoegen wanneer nodig(uren afhankelijk van het pakket)",
            "Maandelijkse SEO updates(optioneel)",
            "Snelle reactie op urgente problemen",
        ],
        process: [
            {
            title: "Intake gesprek",
            description: "Wensen en doelen bespreken, website inventariseren, pakket bepalen"
            },
            {
            title: "1 malige setup(€49)",
            description: "Installatie van onderhouds plugins, eigen plugins en monitoring tools"
            },
            {
            title: "Maandelijkse updates",
            description: "Maandelijks automatische updates van plugins en thema's, en handmatige updates van Wordpress(indien er een nieuwe versie is) na het maken van een back-up, database monitoring en indien binnen pakket: SEO updates"
            },
            {
            title: "Maandelijkse support uren",
            description: "Afhankelijk van het pakket, de support uren per maand om bugs op te lossen, nieuwe functies toe te voegen, content updates of andere aanpassingen te maken"
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