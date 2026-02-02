
import { FaMobile, FaDatabase, FaPalette, FaRobot, FaServer, FaCode } from 'react-icons/fa';
import { SiFlutter, SiDart, SiExpress, SiNodedotjs, SiMongodb, SiMysql, SiSqlite, SiFirebase, SiOpenai, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

export const PERSONAL_INFO = {
    name: "Ahmed Bouacheri",
    title: "Full Stack Mobile Developer | AI Specialist",
    bio: "Mobile developer specialized in Flutter and Express.js with experience in MongoDB, MySQL, and SQLite. I create intuitive, efficient, and user-focused mobile and web applications, integrating custom UI/UX designs, backend APIs, and even AI/ML features when needed.",
    email: "a.bouacheri@esi-sba.dz",
    socials: {
        linkedin: "https://www.linkedin.com/in/ahmed-bouacheri-09819329b",
        github: "https://github.com/Sidoah2/",
        facebook: "https://www.facebook.com/share/19fxVoB5De/",
        instagram: "https://www.instagram.com/.s.i.d.o.u.?igsh=MW1weGtmbHhiazdxZA=="
    }
};

export const SKILLS = [
    { name: "Mobile Development", icon: FaMobile, desc: "Expert Flutter & Dart development for iOS/Android" },
    { name: "Backend Systems", icon: FaServer, desc: "Node.js, Express.js, RESTful APIs" },
    { name: "Database Management", icon: FaDatabase, desc: "MongoDB, MySQL, SQLite, Firebase" },
    { name: "AI Integration", icon: FaRobot, desc: "OpenAI API, ML Model integration" },
    { name: "UI/UX Design", icon: FaPalette, desc: "Modern interfaces, Animations, State Management" },
    { name: "Web Technologies", icon: FaCode, desc: "React, Next.js, HTML, CSS, JavaScript" },
];

export const TECH_STACK = [
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Dart", icon: SiDart, color: "#0175C2" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "OpenAI", icon: SiOpenai, color: "#412991" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
];

export const EXPERIENCE = [
    {
        role: "Mobile Development Coach",
        company: "BrainerX",
        period: "Dec 2025 – Present",
        desc: "Coaching students in mobile development fundamentals, specializing in Flutter technology.",
    },
    {
        role: "Flutter Developer",
        company: "Zsoft (Freelance)",
        period: "Nov 2025 – Present",
        desc: "Remote Flutter Developer responsible for maintaining and optimizing existing mobile applications.",
    },
    {
        role: "Mobile Projects Coordinator",
        company: "Xrion Agency",
        period: "Nov 2025 – Present",
        desc: "Coordinating mobile projects and managing on-site development teams.",
    },
    {
        role: "Hospital Information Systems Intern",
        company: "EPH – Hôpital Meslem Tayeb",
        period: "Sept 2025",
        desc: "Observed and improved hospital information systems for medical record management.",
    },
    {
        role: "Mobile Application Developer",
        company: "Freelance",
        period: "Dec 2023 – Present",
        desc: "Delivering custom mobile solutions with a focus on usability, performance, and client satisfaction.",
    }
];

export const EDUCATION = [
    {
        degree: "AI & Data Science Engineer",
        school: "Higher School of Computer Science (ESI-SBA)",
        period: "Sept 2025 – Sept 2027",
        desc: "Specialized Engineering Diploma in Artificial Intelligence and Data Science.",
    },
    {
        degree: "State Engineer Degree",
        school: "Higher School of Computer Science (ESI-SBA)",
        period: "Sept 2022 – Sept 2027",
        desc: "Comprehensive Computer Science Engineering curriculum.",
    },
    {
        degree: "Machine Learning & Deep Learning",
        school: "Udemy Certification",
        period: "2024",
        desc: "specialized training in integrating ML models with mobile applications.",
    }
];

export const PROJECTS = [
    {
        title: "CloneMe - AI Powered Assistant",
        slug: "cloneme",
        desc: "A flagship V1 mobile application leveraging OpenAI to create intelligent, automated conversational agents. Features natural and personal generation modes.",
        longDesc: "CloneMe represents the cutting edge of mobile AI integration. It allows users to clone their own conversational style or use pre-tuned personas for automated responses. The app handles complex state management and communicates effectively with a scalable backend.",
        tech: ["Flutter", "Node.js", "OpenAI", "MongoDB"],
        tag: "Flagship",
        link: "#",
        image: "/assets/images/cloneme_v1.jpg",
        features: [
            "AI-powered message generation with OpenAI (GPT models)",
            "Two distinct generation modes: Natural & Personal",
            "Real-time conversation cloning capabilities",
            "Secure authentication and user profile management",
            "Robust Node.js backend with MongoDB persistence"
        ],
        date: "2026"
    },
    {
        title: "Tijarati Management",
        slug: "tijarati",
        desc: "Sales and invoice management system helping clients manage daily operations with bluetooth printing capabilities.",
        longDesc: "Tijarati streamlines the daily workflow of small business owners by digitizing their sales and invoicing process. The app's standout feature is its seamless integration with thermal Bluetooth printers for on-the-spot receipt generation.",
        tech: ["Flutter", "SQLite", "Bluetooth"],
        tag: "Freelance",
        link: "tijarati.html",
        image: "/assets/images/tijarati.jpg",
        features: [
            "Offline-first architecture using SQLite",
            "Bluetooth Thermal Printer integration",
            "Invoice generation and management",
            "Daily sales tracking and reporting",
            "Simple, intuitive UI for non-technical users"
        ],
        date: "2024"
    },
    {
        title: "Smart IoT Energy Meter",
        slug: "smart-iot",
        desc: "Real-time energy monitoring system with voltage/current tracking and smart alerts for consumption peaks.",
        longDesc: "This project bridges the physical and digital worlds. It connects an Arduino-based energy meter to a Flutter mobile app via Firebase, allowing users to monitor their household energy consumption in real-time and even disconnect power remotely.",
        tech: ["Flutter", "IoT", "Firebase", "Arduino", "ESP32"],
        tag: "IoT",
        link: "smartioy.html",
        image: "",
        features: [
            "Real-time tracking of Voltage, Current, Power (W), and Energy (kWh)",
            "Automatic cost calculation based on tariff tiers",
            "Remote power cut-off via App",
            "Smart alerts for consumption peaks",
            "Multi-user roles: User, Technician, Admin"
        ],
        date: "2024"
    },
    {
        title: "Stock Management System",
        slug: "stock-management",
        desc: "Three-app ecosystem for business owners, sellers, and clients to manage stock, sales, invoices, and orders.",
        longDesc: "A complex ecosystem designed for medium-sized businesses. It consists of three separate applications for different stakeholders, all synchronized via a central Firebase backend to ensure real-time inventory updates.",
        tech: ["Flutter", "Firebase", "GetX"],
        tag: "Freelance",
        link: "stockmanagment.html",
        image: "",
        features: [
            "Real-time Inventory Sync across 3 apps",
            "Role-based access control (Admin, Seller, Client)",
            "Order processing workflow",
            "Financial tracking and reporting",
            "Barcode scanning integration"
        ],
        date: "2023"
    },
    {
        title: "Transfer - Multi-Service",
        slug: "transfer",
        desc: "Multi-service transportation app connecting users with drivers, trucks, and construction equipment.",
        longDesc: "Originally a taxi booking app, Transfer evolved into a logistics powerhouse. It allows users to book not just cars, but construction vehicles and heavy machinery, with flexible hourly or distance-based pricing models.",
        tech: ["Flutter", "Firebase", "REST APIs", "Google Maps"],
        tag: "Freelance",
        link: "transfer.html",
        image: "/assets/images/transfer.png",
        features: [
            "Multi-category vehicle booking (Taxi, Truck, Machinery)",
            "Real-time driver tracking with Google Maps",
            "Flexible pricing algorithms (Hourly vs Distance)",
            "Driver and User Dashboards",
            "Advanced search and filtering"
        ],
        date: "2024"
    },
    {
        title: "Fidk - Freelance Marketplace",
        slug: "fidk",
        desc: "Marketplace app connecting sellers and buyers with secure login, chat, and integrated payment systems.",
        longDesc: "Fidk is a platform designed to empower local freelancers. It provides a secure environment for transactions, featuring built-in chat for negotiation and integration with local payment gateways like Chargili and Baridi.",
        tech: ["Flutter", "Firebase", "Chargili API"],
        tag: "Freelance",
        link: "fidk.html",
        image: "/assets/images/fidk.png",
        features: [
            "Dual interface for Buyers and Sellers",
            "In-app Chat system",
            "Secure Login & Authentication",
            "Rating and Review system",
            "Integrated Payment Gateways (Chargili, Baridi)"
        ],
        date: "2024"
    },
    {
        title: "GDStock System",
        slug: "gdstock",
        desc: "Comprehensive distributor/customer interaction platform with secure accounts and order management.",
        longDesc: "GDStock solves the communication gap between large distributors and their verified retail customers. It allows distributors to control their catalog visibility and manage large-scale orders efficiently.",
        tech: ["Flutter", "Express", "MySQL", "MongoDB"],
        tag: "Enterprise",
        link: "gdstock.html",
        image: "/assets/images/gdstock.png",
        features: [
            "Distributor Interface: Catalog & Order Management",
            "Customer Interface: Ordering & Storage Selection",
            "Strict Account Security & Verification",
            "Direct Order Printing",
            "Hybrid Database Architecture (MySQL + MongoDB)"
        ],
        date: "2025"
    }
];

export const TESTIMONIALS = [
    {
        name: "Mai D.",
        role: "Client - CloneMe Project",
        text: "Collaboration très positive avec Ahmed sur le projet CloneMe. Il a fait preuve d'un grand professionnalisme, d'une excellente communication et d'un vrai sens des responsabilités.",
        initial: "M"
    },
    {
        name: "Yacine Zegrar",
        role: "Software Engineer",
        text: "C'est une personne fiable, impliquée et toujours orientée solutions. Son professionnalisme, sa capacité d'analyse et son excellent relationnel font de lui un véritable atout.",
        initial: "Y"
    }
];
