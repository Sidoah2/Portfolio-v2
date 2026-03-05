
"use client";
import { SKILLS_CATEGORIES } from "@/app/data";
import Section from "./Section";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <Section id="skills">
            <h2 className="text-4xl font-bold mb-16 text-center">
                My <span className="text-gradient">Skillset</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {SKILLS_CATEGORIES.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card p-10 rounded-3xl"
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
                            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">
                                0{idx + 1}
                            </span>
                            {category.name}
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {category.skills.map((skill, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group border border-transparent hover:border-primary/20"
                                >
                                    <div className="text-4xl text-gray-400 group-hover:text-primary transition-colors group-hover:scale-110 duration-300">
                                        <skill.icon />
                                    </div>
                                    <span className="text-sm font-medium text-gray-300 text-center">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
