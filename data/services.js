import { FaBuilding, FaCartShopping, FaCode, FaHandshake, FaWrench } from "react-icons/fa6";

const services = [
    {
        icon: FaHandshake,
        title: "Freelance Developer voor Agencies",
        link: "/diensten/freelance-developer-agencies",
        description: "Betrouwbare freelance development support voor agencies die extra uitvoeringskracht nodig hebben.",
        text: "Werk je als agency aan meerdere klantprojecten tegelijk en zoek je een developer die snel kan aansluiten? Ik help bureaus als freelance developer met het bouwen, doorontwikkelen en technisch afronden van websites, landingspagina's en Shopify-aanpassingen. Ik kan white-label meewerken, aansluiten op bestaande designs en developmentflows volgen alsof ik tijdelijk onderdeel ben van je team.",
        price: "Projectbasis of retainer",
        tags: ["freelance", "agencies", "white-label", "React", "Next.js", "Shopify"],
        image: "/images/services/custom_web_thumbnail.jpg",
        benefits: [
            "Snel inzetbaar bij piekdrukte of lopende klantprojecten",
            "Aansluiting op bestaande designs, tickets en workflows",
            "Geschikt voor white-label samenwerking",
            "Heldere communicatie over voortgang en planning",
            "Ondersteuning bij nieuwe builds en doorontwikkeling",
            "Flexibel inzetbaar per sprint, project of vaste dagdelen"
        ],
        process: [
            {
                title: "Kennismaking",
                description: "We bespreken voor welk type klanten en projecten je extra developmentcapaciteit zoekt."
            },
            {
                title: "Scope en werkwijze",
                description: "We stemmen af hoe ik aansluit op jullie tools, planning, designs en communicatielijnen."
            },
            {
                title: "Integratie in projectflow",
                description: "Ik stap in op een bestaand project of help vanaf de technische uitwerking van een nieuw traject."
            },
            {
                title: "Ontwikkeling",
                description: "Ik werk taken uit, lever gestructureerd op en houd je tussendoor op de hoogte van de voortgang."
            },
            {
                title: "Oplevering en vervolg",
                description: "Na oplevering kan ik blijven ondersteunen bij optimalisaties, support of een volgend project."
            }
        ],
        gallery: [],
    },
    {
        icon: FaBuilding,
        title: "Freelance Developer voor Bedrijven",
        link: "/diensten/freelance-developer-bedrijven",
        description: "Tijdelijke of contractmatige developmentcapaciteit voor bedrijven die een developer in huis willen halen.",
        text: "Soms heb je als bedrijf wel developmentwerk liggen, maar niet direct behoefte aan een fulltime hire. In dat geval kan ik op projectbasis of contractbasis aansluiten als freelance developer. Ik help bij het bouwen van nieuwe features, het verbeteren van bestaande websites of webshops en het technisch uitvoeren van digitale plannen zonder dat je meteen een vaste developer hoeft aan te nemen.",
        price: "Contractbasis of projectbasis",
        tags: ["freelance", "bedrijven", "frontend", "doorontwikkeling", "contractbasis", "support"],
        image: "/images/services/Maintenancesupport_image.jpg",
        benefits: [
            "Extra technische capaciteit zonder vaste aanstelling",
            "Inzetbaar voor nieuwe features en verbeteringen",
            "Praktisch meedenken over haalbaarheid en planning",
            "Geschikt voor tijdelijke versterking van een intern team",
            "Focus op duidelijke communicatie en eigenaarschap",
            "Flexibel inzetbaar voor korte en langere trajecten"
        ],
        process: [
            {
                title: "Inventarisatie",
                description: "We brengen in kaart welk werk er ligt, welke systemen er al zijn en waar ondersteuning nodig is."
            },
            {
                title: "Afspraken en planning",
                description: "We bepalen of ik aansluit op contractbasis, vaste dagdelen of voor een afgebakend project."
            },
            {
                title: "Inwerken op de omgeving",
                description: "Ik maak kennis met de huidige stack, processen en prioriteiten zodat ik snel effectief kan bijdragen."
            },
            {
                title: "Uitvoering",
                description: "Ik werk aan features, optimalisaties of technische verbeteringen en stem voortgang regelmatig af."
            },
            {
                title: "Overdracht of verlenging",
                description: "Na afronding kan ik netjes overdragen of langer betrokken blijven als dat gewenst is."
            }
        ],
        gallery: [],
    },
    {
        icon: FaCode,
        title: "Websites op maat",
        link: "/diensten/websites-op-maat",
        description: "Professionele websites en webshops die passen bij je merk, doelen en doelgroep.",
        text: "Voor ondernemers en bedrijven die een complete website of webshop willen laten bouwen, ontwikkel ik oplossingen op maat die niet alleen goed ogen maar ook logisch werken. Van structuur en inhoud tot techniek en livegang denk ik mee over een website die snel, gebruiksvriendelijk en schaalbaar is. Zo krijg je niet alleen een mooi eindresultaat, maar ook een digitale basis waar je verder op kunt bouwen.",
        price: "Vanaf €1399,-",
        tags: ["websites", "maatwerk", "Next.js", "WordPress", "responsive", "conversie"],
        image: "/images/services/wordpress_thumbnail.jpg",
        benefits: [
            "Website afgestemd op jouw merk en doelgroep",
            "Duidelijke structuur en gebruiksvriendelijke opbouw",
            "Volledig responsive voor desktop en mobiel",
            "Sterke technische basis voor snelheid en SEO",
            "Uitbreidbaar met extra pagina's of functionaliteit",
            "Persoonlijke begeleiding van intake tot livegang"
        ],
        process: [
            {
                title: "Intake",
                description: "We bespreken je doelen, doelgroep, gewenste inhoud en wat de website moet opleveren."
            },
            {
                title: "Structuur en concept",
                description: "Ik werk een logische pagina-indeling en aanpak uit die past bij jouw bedrijf en aanbod."
            },
            {
                title: "Ontwikkeling",
                description: "De website wordt technisch opgebouwd met aandacht voor snelheid, gebruiksgemak en uitstraling."
            },
            {
                title: "Testen",
                description: "Ik controleer de website op verschillende schermgroottes, browsers en praktische gebruikssituaties."
            },
            {
                title: "Livegang",
                description: "Na de laatste check gaat de website live en zorg ik voor een nette overdracht."
            }
        ],
        gallery: [],
    },
    {
        icon: FaCartShopping,
        title: "Shopify Development",
        link: "/diensten/shopify-development",
        description: "Maatwerk binnen Shopify voor webshops die meer willen dan een standaard thema.",
        text: "Een standaard Shopify thema is vaak een goed begin, maar niet altijd genoeg voor een merk dat echt wil opvallen. Ik help met Shopify development op maat, zoals custom secties, extra blokken, aangepaste templates en onderdelen die gericht zijn op branding, conversie en gebruiksgemak. Zo bouw je verder op de sterke basis van Shopify, maar met meer vrijheid in presentatie en inhoud.",
        price: "Prijs op aanvraag",
        tags: ["Shopify", "maatwerk", "themes", "custom sections", "e-commerce", "conversie"],
        image: "/images/services/image_5.jpg",
        benefits: [
            "Meer vrijheid dan binnen een standaard Shopify thema",
            "Custom secties en blokken voor unieke content",
            "Betere aansluiting op branding en productpresentatie",
            "Conversiegerichte uitbreidingen voor je webshop",
            "Efficient maatwerk vanuit een stabiele Shopify basis",
            "Geschikt voor nieuwe en bestaande Shopify shops"
        ],
        process: [
            {
                title: "Analyse van de shop",
                description: "We bekijken wat er al staat, waar beperkingen zitten en welke uitbreidingen het meeste opleveren."
            },
            {
                title: "Plan voor maatwerk",
                description: "Ik werk uit welke secties, templates of blokken nodig zijn om jouw shop beter te laten aansluiten."
            },
            {
                title: "Ontwikkeling in Shopify",
                description: "Ik bouw de onderdelen binnen het thema en zorg dat ze logisch beheerbaar blijven."
            },
            {
                title: "Controle en optimalisatie",
                description: "We testen de shop op desktop en mobiel en scherpen waar nodig de gebruikerservaring aan."
            },
            {
                title: "Oplevering",
                description: "Na oplevering kun je de nieuwe onderdelen gebruiken binnen je bestaande Shopify workflow."
            }
        ],
        gallery: [],
    },
    {
        icon: FaWrench,
        title: "Onderhoud en Doorontwikkeling",
        link: "/diensten/onderhoud-doorontwikkeling",
        description: "Voor websites en webshops die technisch bijgehouden en stap voor stap verder uitgebouwd moeten worden.",
        text: "Een website of webshop is zelden echt af. Daarom help ik ook met onderhoud en doorontwikkeling voor bestaande projecten. Denk aan updates, bugfixes, technische verbeteringen, performance-optimalisaties en nieuwe functionaliteiten. Ideaal voor bedrijven, agencies of ondernemers die een betrouwbare developer zoeken om op terug te vallen na de livegang.",
        price: "Vanaf €95,- per maand",
        tags: ["onderhoud", "doorontwikkeling", "support", "updates", "performance", "bugfixes"],
        image: "/images/services/Maintenancesupport_image.jpg",
        benefits: [
            "Je website of shop blijft technisch gezond",
            "Snelle hulp bij bugs en kleine issues",
            "Ruimte om stap voor stap nieuwe functies toe te voegen",
            "Prestaties en gebruikservaring blijven verbeteren",
            "Inzetbaar voor sites die ik wel of niet zelf gebouwd heb",
            "Vaste technische partner voor na livegang"
        ],
        process: [
            {
                title: "Technische intake",
                description: "Ik kijk naar de huidige website of webshop en breng verbeterpunten en risico's in kaart."
            },
            {
                title: "Prioriteiten bepalen",
                description: "Samen bepalen we welke updates, fixes of uitbreidingen het eerst moeten worden opgepakt."
            },
            {
                title: "Doorlopende uitvoering",
                description: "Ik voer onderhoud en verbeteringen uit op basis van de afgesproken frequentie of planning."
            },
            {
                title: "Monitoring en support",
                description: "Bij problemen of nieuwe wensen kun je snel schakelen zodat het project niet stilvalt."
            },
            {
                title: "Verder uitbouwen",
                description: "Van kleine optimalisaties tot grotere nieuwe onderdelen: we bouwen gericht verder op wat er al staat."
            }
        ],
        gallery: [],
    }
];

export default services;
