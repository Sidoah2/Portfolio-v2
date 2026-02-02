
"use client";
import { TESTIMONIALS } from "@/app/data";
import Section from "./Section";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
    return (
        <Section id="testimonials" className="bg-white/5 rounded-3xl my-20">
            <h2 className="text-4xl font-bold mb-12 text-center">
                Client <span className="text-gradient">Recommendations</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {TESTIMONIALS.map((testi, idx) => (
                    <div key={idx} className="bg-dark/50 p-8 rounded-xl border border-white/5 relative">
                        <FaQuoteLeft className="text-4xl text-white/10 absolute top-6 left-6" />
                        <p className="text-gray-300 italic mb-6 relative z-10 pl-4 border-l-4 border-primary/50">
                            "{testi.text}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center font-bold text-dark text-xl">
                                {testi.initial}
                            </div>
                            <div>
                                <h4 className="font-bold">{testi.name}</h4>
                                <p className="text-sm text-gray-500">{testi.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
