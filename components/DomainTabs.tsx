"use client";
import React, { useState } from "react";
import Section from "./Section";
import { DOMAINS, PROJECTS, DATA_PROJECTS, WEB_PROJECTS } from "@/app/data";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCardImage from "./ProjectCardImage";
import Link from "next/link";
import { FaMobileAlt, FaCode, FaChartBar } from "react-icons/fa";

export default function DomainTabs() {
    const [activeTab, setActiveTab] = useState("mobile");

    const getDomainProjects = (id: string) => {
        if (id === "data") return DATA_PROJECTS;
        if (id === "web") return WEB_PROJECTS;
        return PROJECTS.filter(p => !["Data Analysis", "Web Development"].includes(p.tag));
    };

    const activeDomain = DOMAINS.find(d => d.id === activeTab)!;
    const domainProjects = getDomainProjects(activeTab);

    return (
        <Section id="work">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    What I <span className="text-gradient">Do</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A deep dive into my three core areas of expertise. Select a domain below to see my work and process.
                </p>
            </div>

            {/* Segmented Controls */}
            <div className="flex flex-wrap justify-center gap-4 mb-20 bg-white/5 p-2 rounded-full w-fit mx-auto border border-white/10 backdrop-blur-sm shadow-xl">
                {DOMAINS.map((domain) => (
                    <button
                        key={domain.id}
                        onClick={() => setActiveTab(domain.id)}
                        className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 relative ${activeTab === domain.id ? "text-dark" : "text-gray-400 hover:text-white"
                            }`}
                    >
                        {activeTab === domain.id && (
                            <motion.div
                                layoutId="active-tab"
                                className="absolute inset-0 bg-primary rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                            <domain.icon />
                            {domain.title.split(" ")[0]}
                        </span>
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="max-w-6xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-20"
                    >
                        {/* Domain Hero */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <h3 className="text-4xl font-bold leading-tight">
                                    {activeDomain.title}
                                </h3>
                                <p className="text-xl text-gray-400 leading-relaxed">
                                    {activeDomain.desc}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {activeDomain.tools.map(tool => (
                                        <span key={tool} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm font-medium text-secondary">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="glass-card p-4 rounded-3xl aspect-video relative flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 opacity-50" />
                                <div className="text-primary text-9xl opacity-30 blur-2xl animate-pulse">
                                    <activeDomain.icon />
                                </div>
                                <div className="z-10 text-primary text-9xl shadow-2xl drop-shadow-2xl">
                                    <activeDomain.icon />
                                </div>
                            </div>
                        </div>

                        {/* Domain Projects */}
                        <div>
                            <h4 className="text-2xl font-bold mb-10 flex items-center gap-3">
                                <span className="w-10 h-[2px] bg-primary" />
                                Selected Projects
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {domainProjects.map((project, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5 }}
                                        className="glass-card rounded-2xl overflow-hidden group shadow-lg"
                                    >
                                        <ProjectCardImage
                                            src={project.image}
                                            title={project.title}
                                            className="h-64 w-full"
                                        />
                                        <div className="p-8">
                                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                            <p className="text-gray-400 mb-6 line-clamp-2">{project.desc}</p>
                                            <Link
                                                href={`/projects/${project.slug}`}
                                                className="text-primary font-bold hover:text-white transition-colors inline-flex items-center gap-2 group-hover:translate-x-1 duration-300"
                                            >
                                                View Details <span>→</span>
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </Section>
    );
}
