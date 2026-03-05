"use client";
import React from "react";
import Section from "./Section";
import { PERSONAL_INFO, FREELANCE_AVAILABILITY } from "@/app/data";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <Section id="contact">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="text-gray-400">
                        Interested in working together or just want to say hi?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="glass-card p-8 rounded-2xl flex items-center gap-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Email Me</p>
                                <p className="font-bold text-lg">{PERSONAL_INFO.email}</p>
                            </div>
                        </motion.div>

                        <div className="flex gap-4">
                            <a
                                href={PERSONAL_INFO.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 glass-card p-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all text-xl"
                            >
                                <FaLinkedin className="text-blue-400" />
                                <span className="text-sm font-bold">LinkedIn</span>
                            </a>
                            <a
                                href={PERSONAL_INFO.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 glass-card p-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all text-xl"
                            >
                                <FaGithub className="text-gray-200" />
                                <span className="text-sm font-bold">GitHub</span>
                            </a>
                        </div>
                    </div>

                    {/* Freelance Status */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass-card p-10 rounded-3xl border-l-4 border-primary relative overflow-hidden"
                    >
                        <div className="absolute top-4 right-4 animate-pulse">
                            <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                                {FREELANCE_AVAILABILITY.status}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold mb-6">Work Invitation</h3>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            {FREELANCE_AVAILABILITY.message}
                        </p>

                        <a
                            href={`mailto:${PERSONAL_INFO.email}`}
                            className="inline-flex items-center gap-3 bg-primary text-dark font-bold px-8 py-4 rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20"
                        >
                            <FaPaperPlane />
                            {FREELANCE_AVAILABILITY.cta}
                        </a>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
