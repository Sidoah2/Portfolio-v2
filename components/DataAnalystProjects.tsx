"use client";
import { DATA_PROJECTS } from "@/app/data";
import Section from "./Section";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCardImage from "./ProjectCardImage";

export default function DataAnalystProjects() {
    return (
        <Section id="data-analyst">
            <h2 className="text-4xl font-bold mb-16 text-center">
                Data <span className="text-gradient">Analysis</span> Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
                {DATA_PROJECTS.map((project, idx) => (
                    <motion.div
                        key={idx}
                        className="glass-card rounded-2xl overflow-hidden group flex flex-col md:flex-row"
                        whileHover={{ y: -5 }}
                    >
                        <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                            <ProjectCardImage
                                src={project.image}
                                title={project.title}
                                className="h-full w-full"
                            />
                        </div>

                        <div className="relative p-8 md:w-1/2">
                            {/* Floating Tag */}
                            <div className="absolute top-0 right-8 -mt-3 bg-secondary text-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                {project.tag}
                            </div>

                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-gray-400 mb-6">{project.desc}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-secondary">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <Link href={`/projects/${project.slug}`} className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-2">
                                View Case Study <span>→</span>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
