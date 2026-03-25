"use client";
import React from "react";
import Section from "./Section";
import { PERSONAL_INFO, FREELANCE_AVAILABILITY } from "@/app/data";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <Section id="contact" className="relative">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 mb-6 border border-primary/30 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase"
                    >
                        Get In Touch
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black mb-6">
                        LET'S <span className="text-gradient">WORK</span> TOGETHER
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                        I'm currently available for freelance projects and full-time opportunities. Have an idea? Let's turn it into reality.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Primary Contact Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="lg:col-span-2 glass-card p-12 rounded-[2rem] border border-white/5 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <FaPaperPlane className="text-[120px] -rotate-12" />
                        </div>
                        
                        <h3 className="text-3xl font-black mb-8">Send me a message</h3>
                        <p className="text-gray-400 mb-12 text-lg">
                            The best way to reach me is via email. I usually respond within 24 hours.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <a
                                href={`mailto:${PERSONAL_INFO.email}`}
                                className="inline-flex items-center gap-4 bg-primary text-dark font-black px-10 py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
                            >
                                <FaEnvelope className="text-xl" />
                                {PERSONAL_INFO.email}
                            </a>
                            <a
                                href={PERSONAL_INFO.socials.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-4 bg-white/5 border border-white/10 text-white font-bold px-10 py-5 rounded-2xl hover:bg-white/10 transition-all"
                            >
                                <FaLinkedin className="text-xl text-blue-400" />
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>

                    {/* Availability / Socials */}
                    <div className="space-y-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-primary/10 border border-primary/20 p-8 rounded-[2rem] relative overflow-hidden"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">{FREELANCE_AVAILABILITY.status}</span>
                            </div>
                            <h4 className="text-xl font-bold mb-4">Available For Projects</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {FREELANCE_AVAILABILITY.message}
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            <SmallContactCard 
                                href={PERSONAL_INFO.socials.github} 
                                icon={<FaGithub />} 
                                label="Github" 
                                color="hover:text-white"
                            />
                            <SmallContactCard 
                                href={PERSONAL_INFO.socials.instagram} 
                                icon={<FaInstagram />} 
                                label="Instagram" 
                                color="hover:text-pink-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

function SmallContactCard({ href, icon, label, color }: { href: string; icon: React.ReactNode; label: string; color: string }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noreferrer"
            className={`glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-3 transition-all ${color} group`}
        >
            <div className="text-3xl group-hover:scale-110 transition-transform">{icon}</div>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">{label}</span>
        </a>
    );
}

