
"use client";
import Image from "next/image";
import { FaLaptopCode, FaMobileAlt, FaLayerGroup } from "react-icons/fa";

// Deterministic gradient generator based on project title
const getGradient = (title: string) => {
    const gradients = [
        "from-blue-600 to-cyan-400",
        "from-purple-600 to-pink-400",
        "from-emerald-600 to-teal-400",
        "from-orange-500 to-yellow-400",
        "from-indigo-600 to-blue-400",
        "from-rose-500 to-red-400"
    ];
    // Simple hash function to pick a consistent gradient
    const index = title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % gradients.length;
    return gradients[index];
};

interface Props {
    src?: string;
    title: string;
    className?: string;
    priority?: boolean;
}

export default function ProjectCardImage({ src, title, className = "", priority = false }: Props) {
    const hasImage = src && src.length > 0;

    if (hasImage) {
        return (
            <div className={`relative bg-gray-900 ${className}`}>
                {/* Loading placeholder/skeleton that stays behind the image */}
                <div className="absolute inset-0 animate-pulse bg-gray-800" />
                <Image
                    src={src!}
                    alt={title}
                    fill
                    priority={priority}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Optional overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
        );
    }

    // Fallback Modern UI
    const gradient = getGradient(title);

    return (
        <div className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-br ${gradient} ${className}`}>
            {/* Abstract shapes for decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl transform -translate-x-10 translate-y-10" />

            {/* Icon */}
            <div className="text-white/90 text-6xl drop-shadow-md transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {title.toLowerCase().includes("mobile") || title.toLowerCase().includes("app") || title.toLowerCase().includes("flutter") ? (
                    <FaMobileAlt />
                ) : (
                    <FaLaptopCode />
                )}
            </div>

            <div className="absolute bottom-4 left-0 w-full text-center">
                <span className="text-white/80 text-xs font-bold tracking-widest uppercase bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    Project Preview
                </span>
            </div>
        </div>
    );
}
