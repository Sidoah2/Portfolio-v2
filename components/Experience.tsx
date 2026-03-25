
"use client";
import { EXPERIENCE, EDUCATION } from "@/app/data";
import Section from "./Section";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Experience() {
    return (
        <Section id="experience" className="relative">
             <div className="text-center mb-24">
                <span className="text-sm font-bold uppercase tracking-[0.4em] text-primary mb-4 block">Background</span>
                <h2 className="text-5xl md:text-6xl font-black mb-8">
                    ROAD TO <span className="text-primary">MASTERY</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
                {/* Work History */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-black mb-12 flex items-center gap-4 text-white uppercase tracking-tighter">
                        <span className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20"><FaBriefcase /></span> 
                        Experience
                    </h3>
                    <div className="relative border-l-[1px] border-white/10 ml-6 pl-10 space-y-16">
                        {EXPERIENCE.map((job, idx) => (
                            <div key={idx} className="relative group">
                                <span className="absolute -left-[51px] top-0 bg-dark border-[1px] border-primary/50 w-5 h-5 rounded-full z-10 group-hover:bg-primary transition-colors" />
                                <div className="absolute -left-[51px] top-0 bg-primary/20 w-5 h-5 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                                
                                <span className="inline-flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                                    <FaCalendarAlt /> {job.period}
                                </span>
                                <h4 className="text-2xl font-black text-white mb-1">{job.role}</h4>
                                <p className="text-sm text-secondary font-medium mb-4">{job.company}</p>
                                <p className="text-gray-400 leading-relaxed text-sm max-w-lg">{job.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-black mb-12 flex items-center gap-4 text-white uppercase tracking-tighter">
                        <span className="p-3 rounded-2xl bg-secondary/10 text-secondary border border-secondary/20"><FaGraduationCap /></span> 
                        Education
                    </h3>
                    <div className="relative border-l-[1px] border-white/10 ml-6 pl-10 space-y-16">
                        {EDUCATION.map((edu, idx) => (
                            <div key={idx} className="relative group">
                                <span className="absolute -left-[51px] top-0 bg-dark border-[1px] border-secondary/50 w-5 h-5 rounded-full z-10 group-hover:bg-secondary transition-colors" />
                                <div className="absolute -left-[51px] top-0 bg-secondary/20 w-5 h-5 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />

                                <span className="inline-flex items-center gap-2 text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10">
                                    <FaCalendarAlt /> {edu.period}
                                </span>
                                <h4 className="text-2xl font-black text-white mb-1">{edu.degree}</h4>
                                <p className="text-sm text-primary font-medium mb-4">{edu.school}</p>
                                <p className="text-gray-400 leading-relaxed text-sm max-w-lg">{edu.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}

