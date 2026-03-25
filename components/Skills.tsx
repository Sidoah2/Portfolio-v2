
"use client";
import { SKILLS_CATEGORIES } from "@/app/data";
import Section from "./Section";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <Section id="skills" className="relative overflow-hidden">
            <div className="text-center mb-24">
                <span className="text-sm font-bold uppercase tracking-[0.4em] text-secondary mb-4 block">Abilities</span>
                <h2 className="text-5xl md:text-6xl font-black mb-8">
                    TECHNICAL <span className="text-secondary">VAULT</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {SKILLS_CATEGORIES.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-primary/20 transition-all duration-500"
                    >
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 p-8 opacity-5 font-black text-8xl pointer-events-none select-none group-hover:opacity-10 transition-opacity">
                            0{idx + 1}
                        </div>

                        <h3 className="text-2xl font-black mb-10 flex items-center gap-4 text-white uppercase tracking-tighter">
                            {category.name}
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {category.skills.map((skill, sIdx) => (
                                <motion.div
                                    key={sIdx}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-white/5 hover:bg-primary/5 transition-all group border border-transparent hover:border-primary/20 cursor-default shadow-lg hover:shadow-primary/5"
                                >
                                    <div className="text-4xl text-gray-500 group-hover:text-primary transition-colors group-hover:scale-110 duration-300">
                                        <skill.icon />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white text-center">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {/* Background Blob */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
        </Section>
    );
}

