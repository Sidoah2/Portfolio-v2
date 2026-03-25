"use client";
import { PERSONAL_INFO } from "@/app/data";
import { FaGithub, FaLinkedin, FaInstagram, FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
    return (
        <footer className="py-20 bg-dark relative border-t border-white/5 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-5">
                <span className="text-[300px] font-black absolute -bottom-20 -left-20 leading-none">AB</span>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
                <Link to="hero" smooth={true} duration={500} className="text-3xl font-black mb-8 cursor-pointer group">
                    <span className="text-primary group-hover:text-secondary transition-colors">A</span>hmed<span className="text-secondary">.</span>
                </Link>

                <div className="flex gap-8 mb-12">
                    <SocialIcon href={PERSONAL_INFO.socials.linkedin} icon={<FaLinkedin />} />
                    <SocialIcon href={PERSONAL_INFO.socials.github} icon={<FaGithub />} />
                    <SocialIcon href={PERSONAL_INFO.socials.instagram} icon={<FaInstagram />} />
                </div>

                <div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

                <div className="flex flex-col md:flex-row justify-between items-center w-full text-gray-500 text-sm gap-6">
                    <p>Designed & Built with Passion by {PERSONAL_INFO.name}</p>
                    <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
                </div>

                {/* Back to Top */}
                <Link 
                    to="hero" 
                    smooth={true} 
                    duration={800} 
                    className="mt-16 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all duration-300 cursor-pointer animate-bounce"
                >
                    <FaChevronUp />
                </Link>
            </div>
        </footer>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noreferrer" 
            className="text-2xl text-gray-500 hover:text-white transition-all transform hover:-translate-y-1"
        >
            {icon}
        </a>
    );
}

