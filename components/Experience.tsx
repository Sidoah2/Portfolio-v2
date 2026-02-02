
"use client";
import { EXPERIENCE, EDUCATION } from "@/app/data";
import Section from "./Section";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Experience() {
    return (
        <Section id="experience">
            <div className="grid md:grid-cols-2 gap-12">

                {/* Work History */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span className="text-primary"><FaBriefcase /></span> Work History
                    </h3>
                    <div className="relative border-l-2 border-white/10 ml-3 pl-8 space-y-12">
                        {EXPERIENCE.map((job, idx) => (
                            <div key={idx} className="relative">
                                <span className="absolute -left-[41px] bg-dark border-2 border-primary w-5 h-5 rounded-full" />
                                <span className="text-sm text-primary font-mono mb-1 block">{job.period}</span>
                                <h4 className="text-xl font-bold">{job.role}</h4>
                                <p className="text-gray-400 text-sm mb-4">{job.company}</p>
                                <p className="text-gray-500 leading-relaxed">{job.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span className="text-secondary"><FaGraduationCap /></span> Education
                    </h3>
                    <div className="relative border-l-2 border-white/10 ml-3 pl-8 space-y-12">
                        {EDUCATION.map((edu, idx) => (
                            <div key={idx} className="relative">
                                <span className="absolute -left-[41px] bg-dark border-2 border-secondary w-5 h-5 rounded-full" />
                                <span className="text-sm text-secondary font-mono mb-1 block">{edu.period}</span>
                                <h4 className="text-xl font-bold">{edu.degree}</h4>
                                <p className="text-gray-400 text-sm mb-4">{edu.school}</p>
                                <p className="text-gray-500 leading-relaxed">{edu.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
}
