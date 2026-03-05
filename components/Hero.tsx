
"use client";
import { PERSONAL_INFO } from "@/app/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 mb-6 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider">
                        AVAILABLE FOR HIRE
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">{PERSONAL_INFO.name}</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                        {PERSONAL_INFO.title}
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                        {PERSONAL_INFO.bio}
                    </p>

                    <div className="flex gap-6 items-center">
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="bg-gradient-to-r from-primary to-secondary text-dark font-bold py-3 px-8 rounded-full hover:shadow-[0_0_20px_rgba(255,193,7,0.4)] transition-all transform hover:-translate-y-1">
                            Contact Me
                        </a>
                        <div className="flex gap-4">
                            <SocialIcon href={PERSONAL_INFO.socials.linkedin} icon={<FaLinkedin />} />
                            <SocialIcon href={PERSONAL_INFO.socials.github} icon={<FaGithub />} />
                            <SocialIcon href={PERSONAL_INFO.socials.facebook} icon={<FaFacebook />} />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="w-80 h-80 md:w-[500px] md:h-[500px] relative rounded-full overflow-hidden border-8 border-white/5 shadow-2xl z-10">
                        {/* Yellow Placeholder for Profile */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center">
                            <span className="text-dark text-9xl md:text-[180px] font-black tracking-tighter opacity-90 select-none">
                                AB
                            </span>

                            {/* Inner Glow/Shadow for Depth */}
                            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />
                        </div>
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute inset-0 border border-primary/20 rounded-full scale-110 animate-pulse" />
                </motion.div>
            </div>
        </section>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: ReactNode }) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="text-2xl text-gray-400 hover:text-primary transition-colors">
            {icon}
        </a>
    );
}

import { ReactNode } from "react";
