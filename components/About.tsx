"use client";
import React from "react";
import Section from "./Section";
import { PERSONAL_INFO } from "@/app/data";
import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaUserGraduate } from "react-icons/fa";

export default function About() {
    return (
        <Section id="about" className="relative">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="aspect-square bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-3xl border border-white/5 relative flex items-center justify-center p-12 overflow-hidden overflow-hidden group">
                        {/* Decorative Background Dots */}
                        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10">
                            {[...Array(36)].map((_, i) => (
                                <div key={i} className="border-[0.5px] border-white/20" />
                            ))}
                        </div>

                        <div className="z-10 text-center space-y-4">
                            <span className="text-8xl block opacity-30 select-none group-hover:scale-110 transition-transform duration-700">🎨</span>
                            <h3 className="text-2xl font-black text-white px-8">Engineering with a <span className="text-primary">Designer's</span> Heart</h3>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 blur-xl animate-pulse" />
                        <div className="absolute bottom-10 left-10 w-24 h-24 bg-secondary/10 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                </motion.div>

                {/* Content Side */}
                <div className="space-y-8 order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-bold uppercase tracking-[0.4em] text-primary mb-4 block">About Me</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                            Crafting High-Performance <br />
                            <span className="text-gradient">Mobile & Web Solutions</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {PERSONAL_INFO.bio}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 pt-4">
                        <AboutFeature icon={<FaRocket className="text-primary" />} title="Fast" desc="Optimized performance." />
                        <AboutFeature icon={<FaLaptopCode className="text-secondary" />} title="Clean" desc="Scalable, readable code." />
                        <AboutFeature icon={<FaUserGraduate className="text-yellow-500" />} title="AI" desc="Intelligent features." />
                    </div>
                </div>
            </div>
        </Section>
    );
}

function AboutFeature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
    return (
        <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all">
            <div className="text-2xl mb-3">{icon}</div>
            <h4 className="font-bold text-white mb-1 uppercase text-xs tracking-wider">{title}</h4>
            <p className="text-[10px] text-gray-500 leading-tight">{desc}</p>
        </div>
    );
}
