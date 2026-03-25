
"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Work", to: "work" },
    { name: "Experience", to: "experience" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact", to: "contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "bg-dark/80 backdrop-blur-md shadow-lg py-4 border-b border-white/5" : "bg-transparent py-6"
                }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="hero" smooth={true} duration={500} className="text-2xl font-bold font-sans cursor-pointer">
                    <span className="text-primary font-black">A</span>hmed<span className="text-secondary font-black">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            spy={true}
                            offset={-80}
                            duration={500}
                            activeClass="!text-primary font-bold after:w-full"
                            className="cursor-pointer nav-link text-sm font-medium tracking-widest uppercase opacity-80 hover:opacity-100 transition-opacity"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="#contact" className="ml-4 px-6 py-2 border border-primary/50 text-primary text-xs font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-dark transition-all duration-300">
                        Hire Me
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-3xl text-white transition-transform active:scale-95 z-[101]"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 bg-dark z-[100] flex flex-col items-center justify-center gap-8 md:hidden h-screen w-screen"
                        >
                            <div className="absolute top-0 right-0 p-12 pointer-events-none opacity-5">
                                <span className="text-[200px] font-black leading-none">AB</span>
                            </div>

                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * idx }}
                                >
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        offset={-80}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-black text-white hover:text-primary transition-colors cursor-pointer block"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="flex gap-4 mt-8">
                                <span className="w-10 h-0.5 bg-primary/30 my-auto"></span>
                                <p className="text-gray-500 text-sm tracking-widest uppercase">Get In Touch</p>
                                <span className="w-10 h-0.5 bg-primary/30 my-auto"></span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

