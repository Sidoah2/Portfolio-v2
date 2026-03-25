
"use client";
import { PERSONAL_INFO } from "@/app/data";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaChevronDown } from "react-icons/fa";
import { ReactNode } from "react";
import { Link } from "react-scroll";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            {PERSONAL_INFO.title.split('|')[0]}
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tight text-white">
                            I CREATE <br />
                            <span className="text-gradient">DIGITAL</span> <br />
                            EXPERIENCE
                        </h1>

                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light">
                            {PERSONAL_INFO.bio}
                        </p>

                        <div className="flex flex-wrap gap-6 items-center">
                            <Link 
                                to="contact" 
                                smooth={true} 
                                duration={500}
                                className="px-10 py-4 bg-primary text-dark font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,193,7,0.3)] cursor-pointer"
                            >
                                Let's Talk
                            </Link>

                            <div className="flex gap-4">
                                <SocialIcon href={PERSONAL_INFO.socials.linkedin} icon={<FaLinkedin />} />
                                <SocialIcon href={PERSONAL_INFO.socials.github} icon={<FaGithub />} />
                                <SocialIcon href={PERSONAL_INFO.socials.instagram} icon={<FaInstagram />} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual / Profile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-[500px] h-[500px] mx-auto">
                            {/* Abstract Shapes */}
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-[1px] border-white/10 rounded-[40%] rotate-45"
                            />
                            <motion.div 
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 border-[1px] border-primary/20 rounded-[40%] -rotate-12"
                            />

                            {/* Main Profile Container */}
                            <div className="absolute inset-12 bg-dark/40 backdrop-blur-3xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 group-hover:opacity-100 transition-opacity" />
                                
                                <span className="text-[240px] font-black text-white/5 select-none transition-transform group-hover:scale-110 duration-700">
                                    AB
                                </span>
                                
                                {/* Floating Tech Icons (Decoration) */}
                                <div className="absolute top-10 left-10 w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center text-primary text-2xl animate-bounce">
                                    🚀
                                </div>
                                <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center text-secondary text-3xl animate-bounce" style={{ animationDelay: '1s' }}>
                                    ⚡
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Down Indicator */}
                <Link to="skills" smooth={true} duration={500} className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group">
                    <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 group-hover:text-primary transition-colors">Scroll</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
                    </motion.div>
                </Link>
            </div>
        </section>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: ReactNode }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noreferrer" 
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
        >
            {icon}
        </a>
    );
}

