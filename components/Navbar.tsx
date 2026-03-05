
"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Skills", to: "skills" },
    { name: "Work", to: "work" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-dark/80 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="text-2xl font-bold font-sans">
                    <span className="text-primary">A</span>hmed<span className="text-secondary">.</span>
                </div>

                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer nav-link text-sm font-medium tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Placeholder - Can extend later */}
                <div className="md:hidden text-white">☰</div>
            </div>
        </motion.nav>
    );
}
