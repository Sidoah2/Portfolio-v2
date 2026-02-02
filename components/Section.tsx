
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Section({ children, id, className = "" }: { children: ReactNode; id?: string; className?: string }) {
    return (
        <section id={id} className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                {children}
            </motion.div>
        </section>
    );
}
