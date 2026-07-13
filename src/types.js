import UnknownImg from "./assets/images/unknown-img.jpg";
const highlightsData = [
  {
    id: "spacious",
    icon: "\u{1F3E1}",
    title: "Spacious Layout",
    description: "Expansive 4 BHK layouts with double-height ceilings and luxurious architectural volumes."
  },
  {
    id: "garden",
    icon: "\u{1F331}",
    title: "Private Garden",
    description: "Lush, personal landscaped gardens wrapping around your residence for serene outdoor moments."
  },
  {
    id: "interiors",
    icon: "\u2728",
    title: "Luxury Interiors",
    description: "Premium Italian marble flooring, bespoke custom cabinetry, and designer fixtures throughout."
  },
  {
    id: "balconies",
    icon: "\u{1F305}",
    title: "Large Balconies",
    description: "Deep, sweeping balconies that extend your master bedrooms out into beautiful nature views."
  },
  {
    id: "independent",
    icon: "\u{1F3F0}",
    title: "100% Independent",
    description: "Zero shared walls. Ultimate privacy with your own dedicated boundaries and private structural pillars."
  },
  {
    id: "parking",
    icon: "\u{1F697}",
    title: "Dedicated Parking",
    description: "Spacious, sheltered multi-vehicle parking bay equipped with active EV charging ports."
  },
  {
    id: "kitchen",
    icon: "\u{1F373}",
    title: "Modern Modular Kitchen",
    description: "State-of-the-art designer wet & dry kitchen layouts with fully integrated high-end appliances."
  },
  {
    id: "ventilation",
    icon: "\u{1F4A8}",
    title: "Optimal Ventilation",
    description: "Vastu-compliant architectural plans ensuring maximum natural light and cross-ventilation flow."
  },
  {
    id: "community",
    icon: "\u{1F6E1}\uFE0F",
    title: "Secure Gated Community",
    description: "A secure sanctuary with multi-tiered 24/7 smart surveillance and dedicated manned checkpoints."
  }
];
const lifestyleSlides = [
  {
    id: "living",
    title: "The Grand Living Room",
    tagline: "Where Grandeur Meets Warmth",
    description: "A double-height architectural masterpiece featuring floor-to-ceiling glass panel walls. Designed to seamlessly blend indoor comfort with the surrounding nature, making every social gathering or quiet evening an elegant experience.",
    image: "living"
  },
  {
    id: "bedroom",
    title: "Opulent Master Suite",
    tagline: "A Sanctuary of Unmatched Rest",
    description: "Your private retreat at the end of the day. A sprawling space designed with warm oak textures, a lavish walk-in wardrobe, and sliding doors leading straight into an expansive glass-railing private balcony.",
    image: "bedroom"
  },
  {
    id: "kitchen",
    title: "Culinary Wet & Dry Kitchen",
    tagline: "Sleek Modern Functionality",
    description: "Engineered for excellence. Premium anti-fingerprint custom matte cabinets, integrated designer quartz countertops, smart storage carousels, and professional-grade appliances that make cooking a joyful art.",
    image: "kitchen"
  },
  {
    id: "garden",
    title: "Private Courtyard Garden",
    tagline: "Your Personal Green Haven",
    description: "Step straight into tranquility. A beautifully manicured lawn and wooden deck wrapping around your villa. Perfectly suited for crisp morning yoga, active organic herb gardens, or cozy evening campfire talks.",
    image: "garden"
  },
  {
    id: "balcony",
    title: "Panoramic Sky Balconies",
    tagline: "Sunrise Coffee & Sunset Tea",
    description: "Each bedroom transitions to an expansive private deck. Enjoy unblocked vistas of South Bangalore\u2019s tree-lined horizons, shaded by timber trellis profiles that filter daylight beautifully.",
    image: "balcony"
  },
  {
    id: "community",
    title: "Sophisticated Community",
    tagline: "A Neighborhood of Elite Peers",
    description: "Surround your family with excellence. Rub shoulders with South Bangalore's most accomplished leaders, tech pioneers, and visionaries, in a serene community designed for refined social networking.",
    image: "clubhouse"
  }
];
const locationFeatures = [
  {
    id: "it-park-1",
    name: "Infosys & Wipro Campus",
    category: "it_park",
    distance: "9.1 km",
    time: "22 - 26 Mins",
    durations: {
      driving: "26 Mins (9.8 km via Hulimangala Rd & Koppa Rd)",
      walking: "1 Hour 55 Mins",
      transit: "52 Mins (Local tech shuttle)",
      cycling: "22 Mins (9.1 km via Hulimangala Rd & Koppa Rd)"
    },
    coords: { x: 32, y: 35 }
  },
  {
    id: "it-park-2",
    name: "Tech Mahindra Park",
    category: "it_park",
    distance: "13.1 km",
    time: "32 - 35 Mins",
    durations: {
      driving: "35 Mins (13.0 km via Hulimangala Rd & Koppa Rd)",
      walking: "2 Hours 46 Mins",
      transit: "1 Hour 14 Mins (Local tech shuttle connection)",
      cycling: "32 Mins (13.1 km via Hulimangala Rd)"
    },
    coords: { x: 20, y: 48 }
  },
  {
    id: "metro",
    name: "Electronic City Metro Station",
    category: "connectivity",
    distance: "10.7 km",
    time: "28 - 30 Mins",
    durations: {
      driving: "30 Mins (18.3 km via NH-48 & Bannerghatta Rd)",
      walking: "2 Hours 28 Mins",
      transit: "1 Hour 10 Mins (Feeder & Metro link)",
      cycling: "28 Mins (10.7 km via Hulimangala Rd)"
    },
    coords: { x: 48, y: 25 }
  },
  {
    id: "nice-road",
    name: "NICE Road Junction",
    category: "connectivity",
    distance: "10.5 km",
    time: "26 - 27 Mins",
    durations: {
      driving: "26 Mins (10.5 km via Begur - Koppa Rd)",
      walking: "2 Hours 18 Mins",
      transit: "1 Hour 16 Mins (Shuttle & Connection)",
      cycling: "26 Mins"
    },
    coords: { x: 15, y: 22 }
  },
  {
    id: "expressway",
    name: "ECity Elevated Expressway",
    category: "connectivity",
    distance: "10.6 km",
    time: "26 - 29 Mins",
    durations: {
      driving: "29 Mins (10.1 km via Koppa Rd) or 26 Mins (10.6 km via Hulimangala Rd)",
      walking: "2 Hours 29 Mins",
      transit: "56 Mins (Local connection)",
      cycling: "26 Mins (10.6 km via Hulimangala Rd)"
    },
    coords: { x: 55, y: 15 }
  },
  {
    id: "school-1",
    name: "Treamis World School",
    category: "education",
    distance: "5.9 km",
    time: "14 - 15 Mins",
    durations: {
      driving: "15 Mins (5.8 km) or 14 Mins (5.9 km via Begur - Koppa Rd & Koppa Rd)",
      walking: "1 Hour 19 Mins",
      transit: "59 Mins (Local shuttle network)",
      cycling: "14 Mins (5.9 km via Begur - Koppa Rd)"
    },
    coords: { x: 72, y: 40 }
  },
  {
    id: "school-2",
    name: "Sherwood High School",
    category: "education",
    distance: "9.0 km",
    time: "16 Mins",
    durations: {
      driving: "16 Mins (9.0 km via Bannerghatta Rd)",
      walking: "1 Hour 56 Mins",
      transit: "39 Mins (Local connection)",
      cycling: "16 Mins (9.0 km via Bannerghatta Rd)"
    },
    coords: { x: 80, y: 55 }
  },
  {
    id: "hospital",
    name: "Narayana Health City",
    category: "health",
    distance: "13.4 km",
    time: "28 - 33 Mins",
    durations: {
      driving: "33 Mins (15.5 km via Koppa Rd) or 28 Mins (13.4 km via Bommasandra Jigani Link Rd/Jigani Main Rd)",
      walking: "2 Hours 30 Mins",
      transit: "59 Mins (Local express feeder link)",
      cycling: "28 Mins (13.4 km via Bommasandra Jigani Link Rd)"
    },
    coords: { x: 62, y: 72 }
  },
  {
    id: "mall",
    name: "Neo Mall & Decathlon",
    category: "leisure",
    distance: "12.4 km",
    time: "27 - 29 Mins",
    durations: {
      driving: "29 Mins (12.5 km via Bommasandra Jigani Link Rd/Jigani Main Rd)",
      walking: "2 Hours 31 Mins",
      transit: "1 Hour 3 Mins (Local link connection)",
      cycling: "27 Mins (12.4 km via Bommasandra Jigani Link Rd)"
    },
    coords: { x: 38, y: 80 }
  }
];
const southBangaloreTimeline = [
  {
    id: "sb-1",
    title: "Nature & Green Canopy",
    subtitle: "Pristine Microclimate Preservation",
    description: "South Bangalore is celebrated for keeping its iconic old green banyan canopies, expansive parks, and natural lake ecosystems intact, offering temperatures up to 2\xB0C cooler than congested northern districts."
  },
  {
    id: "sb-2",
    title: "Rapid Infrastructure Boom",
    subtitle: "Modern Expressways & Elevated Roads",
    description: "Unmatched civil planning has endowed the region with high-speed expressways, multi-lane ring roads, and modern underground sewage and water distribution networks built to last generations."
  },
  {
    id: "sb-3",
    title: "Seamless Metro & Road Connectivity",
    subtitle: "The E-City Expressway Lifeline",
    description: "With the active E-City elevated expressway and the Yellow Line Metro system, commute times to Koramangala, Indiranagar, and the airport have been trimmed by over 45 minutes."
  },
  {
    id: "sb-4",
    title: "High-Yield Future Growth",
    subtitle: "Unmatched Real Estate Appreciation",
    description: "Due to strict zoning laws on independent residential parcels, premium independent villas in this corridor have recorded a consistent year-on-year land value appreciation of over 14.5%."
  },
  {
    id: "sb-5",
    title: "Exclusive Luxury Living",
    subtitle: "The Elite South Bangalore Vibe",
    description: "Known as the cultural heart and intellectual sanctuary of the city, living here connects you to elite premium clubs, organic gourmet cafes, high-end art theaters, and legendary schools."
  }
];
const bentoItems = [
  {
    id: "bento-1",
    num: "01",
    title: "Trusted Luxury Developer",
    subtitle: "Decades of Uncompromised Trust",
    description: "MRCL Infrastructure is built on a legacy of structural transparency, outstanding construction engineering, and prompt, zero-delay delivery of state-of-the-art dream projects.",
    icon: "\u{1F3D7}\uFE0F"
  },
  {
    id: "bento-2",
    num: "02",
    title: "Award Winning Design",
    subtitle: "Sleek Modernist Architecture",
    description: "Crafted by leading international luxury residential architects, our structures balance passive cooling, optimal double-height volumes, and exquisite gold and marble accents.",
    icon: "\u270F\uFE0F"
  },
  {
    id: "bento-3",
    num: "03",
    title: "Prime Connectivity",
    subtitle: "Heart of Electronic City Corridor",
    description: "Strategically located to give you direct, traffic-free bypass lanes leading to top corporate tech hubs, elite international academies, and high-quality tertiary hospitals.",
    icon: "\u{1F6E3}\uFE0F"
  },
  {
    id: "bento-4",
    num: "04",
    title: "High Appreciation & ROI",
    subtitle: "A Generational Asset Class",
    description: "Independent land parcels with structured villas in gated South Bangalore sanctuaries represent the highest appreciating residential class, offering massive rental yield potential.",
    icon: "\u{1F4C8}"
  },
  {
    id: "bento-5",
    num: "05",
    title: "24/7 White-Glove Support",
    subtitle: "Bespoke Concierge Property Services",
    description: "From design modifications during construction to property-management support years down the line, our direct customer care guarantees immediate assistance.",
    icon: "\u{1F91D}"
  }
];
const amenitiesData = [
  { id: "pool", name: "Infinity Pool", icon: "\u{1F3CA}\u200D\u2642\uFE0F", angle: 0, description: "A gorgeous climate-controlled infinity lap pool with floating sunbeds." },
  { id: "gym", name: "Premium Gymnasium", icon: "\u{1F3CB}\uFE0F\u200D\u2642\uFE0F", angle: 45, description: "Fully equipped with advanced high-end bio-metric cardio and strength trainers." },
  { id: "garden", name: "Zen Landscaped Gardens", icon: "\u{1F9D8}\u200D\u2640\uFE0F", angle: 90, description: "Peaceful reflection ponds and stone walking trails for daily mindfulness." },
  { id: "jogging", name: "Rubberized Jogging Track", icon: "\u{1F3C3}\u200D\u2642\uFE0F", angle: 135, description: "Anti-injury professional athletic track weaving through green canopies." },
  { id: "sports", name: "Multi-Sports Court", icon: "\u{1F3BE}", angle: 180, description: "Professional acrylic courts for tennis, pickleball, and basketball matches." },
  { id: "hall", name: "Grand Banquet Hall", icon: "\u{1F3DB}\uFE0F", angle: 225, description: "A highly sophisticated space styled for celebrating your elite milestones." },
  { id: "play", name: "Kids Adventure Park", icon: "\u{1F9F8}", angle: 270, description: "Safe, rubberized play park with dynamic modern slides and sensory mazes." },
  { id: "security", name: "Smart Guard Sentinel", icon: "\u{1F6E1}\uFE0F", angle: 315, description: "Active AI surveillance cameras, perimeter sensors, and automated gate passes." }
];
const testimonialsData = [
  {
    id: "test-1",
    name: "Raghavendra Hegde",
    role: "Senior VP, Tech Pioneer",
    quote: "Living in an MRCL Villa feels like a daily escape to an elite private resort. The absolute independent layout with zero shared walls means my family enjoys full privacy, and the modular kitchen is a chef's dream. Their delivery transparency is commendable.",
    rating: 5,
    avatar: UnknownImg
  },
  {
    id: "test-2",
    name: "Dr. Shalini Mukhopadhyay",
    role: "Renowned Cardiologist",
    quote: "I visited multiple projects in Electronic City, but the spacious double-height living room and private garden at MRCL won us over instantly. The connectivity to Narayana Health is incredibly convenient for emergencies. A truly luxury construction.",
    rating: 5,
    avatar: UnknownImg
  },
  {
    id: "test-3",
    name: "Vikram & Ananya Malhotra",
    role: "Angel Investor & Architect Couple",
    quote: "As an architect, I am exceptionally critical of structural details. MRCL's alignment, Vastu planning, premium marble finishing, and thin gold alignments are flawless. It is a masterpiece of minimal luxury, plus the ROI projection has already surpassed our targets.",
    rating: 5,
    avatar: UnknownImg
  }
];
const faqsData = [
  {
    id: "faq-1",
    question: "Where exactly is MRCL Villas located in South Bangalore?",
    answer: "MRCL Villas is situated in a premium gated residential corridor of Electronic City, South Bangalore. It is strategically placed just 5 minutes from the Electronic City Metro Station, 4 minutes from the Elevated Expressway, and 8 minutes from key IT campuses like Infosys and Wipro, providing high traffic isolation."
  },
  {
    id: "faq-2",
    question: "Are these independent villas or row houses?",
    answer: "These are 100% independent luxury villas with zero shared walls, their own dedicated foundation columns, private surrounding plot space, and a personal landscaped wrap-around garden. This guarantees absolute privacy, personal freedom, and long-term land boundary security."
  },
  {
    id: "faq-3",
    question: "What is the construction status and RERA registration?",
    answer: "The project is fully RERA registered and in an advanced active stage of construction, with multiple villas already in structural finishing phases. We maintain complete transparency with live progress timelines and digital site audits for buyers."
  },
  {
    id: "faq-4",
    question: "Can we customize the interior layouts and specifications?",
    answer: "Yes, we offer bespoke interior curation. Our in-house luxury design consultants allow you to select custom premium Italian marble finishes, adjust partition layouts (such as dry-vs-wet kitchen sizing), add automated home elevator shafts, or include customized smart home panels."
  },
  {
    id: "faq-5",
    question: "What are the key modern eco-friendly/sustainability features?",
    answer: "Our villas feature dynamic modular rain-water harvesting channels, integrated solar panel roof connections, central water filtration systems, organic compost processing pits, and private high-voltage EV charging setups in every personal garage."
  },
  {
    id: "faq-6",
    question: "How can I book a private site visit?",
    answer: "You can book a private chauffeur-driven site visit by clicking any of the 'Book Site Visit' buttons on this page, or directly messaging our VIP Concierge via the floating WhatsApp icon. We will coordinate a tailored walkthrough showing structural samples and ready-to-move mock villas."
  }
];
export {
  amenitiesData,
  bentoItems,
  faqsData,
  highlightsData,
  lifestyleSlides,
  locationFeatures,
  southBangaloreTimeline,
  testimonialsData
};
