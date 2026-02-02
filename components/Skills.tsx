
"use client";
import { SKILLS, TECH_STACK } from "@/app/data";
import Section from "./Section";

export default function Skills() {
    return (
        <Section id="skills">
            <h2 className="text-4xl font-bold mb-16 text-center">
                Skills & <span className="text-gradient">Technologies</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {SKILLS.map((skill, idx) => (
                    <div key={idx} className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                        <div className="text-4xl text-primary mb-4 group-hover:scale-110 transition-transform">
                            <skill.icon />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {TECH_STACK.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-primary/50 transition-colors">
                        <tech.icon style={{ color: tech.color }} className="text-xl" />
                        <span className="font-medium text-gray-200">{tech.name}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
}
