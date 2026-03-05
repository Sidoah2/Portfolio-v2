import { PROJECTS } from "@/app/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCardImage from "@/components/ProjectCardImage";
import Link from "next/link";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Next.js 15 App Router expects params to be a Promise
type Props = {
    params: Promise<{ slug: string }>;
};

// Generate static params for all projects
export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetail({ params }: Props) {
    // Await params to get the slug
    const resolvedParams = await params;
    const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

    if (!project) {
        return (
            <div className="min-h-screen bg-dark text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/" className="text-primary hover:underline">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-dark text-white">
            <Navbar />

            <div className="pt-32 pb-20 max-w-5xl mx-auto px-6">
                <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8">
                    <FaArrowLeft /> Back to Projects
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="bg-primary/20 text-primary border border-primary/30 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                            {project.tag}
                        </span>
                        {project.date && <span className="text-gray-400 text-sm">{project.date}</span>}
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6">{project.title}</h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        {project.desc}
                    </p>

                    <div className="flex gap-4 mt-8">
                        {project.link !== "#" && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-primary text-dark font-bold px-6 py-3 rounded-full hover:bg-white transition-colors">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        )}
                        {/* Add GitHub link if available in data */}
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-20 border border-white/10 shadow-2xl">
                    <ProjectCardImage
                        src={project.image}
                        title={project.title}
                        priority={true}
                        className="w-full h-full"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Sidebar Info */}
                    <div className="md:col-span-1 space-y-8">
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-lg font-bold mb-4 text-white">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="bg-white/5 border border-white/10 px-3 py-1 rounded text-sm text-secondary">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                        <ul className="space-y-4 mb-12">
                            {project.features?.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <span className="text-primary mt-1">✓</span>
                                    {feature}
                                </li>
                            )) || <p className="text-gray-400 italic">Detailed features listing coming soon.</p>}
                        </ul>

                        {/* If there's a detailed story/content */}
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-400 mb-12">
                                {project.longDesc || "No further details provided for this project."}
                            </p>
                        </div>

                        {/* Image Gallery */}
                        {project.gallery && project.gallery.length > 0 && (
                            <div className="mt-16">
                                <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
                                <div className="grid grid-cols-1 gap-8">
                                    {project.gallery.map((img: string, i: number) => (
                                        <div key={i} className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
                                            <ProjectCardImage
                                                src={img}
                                                title={`${project.title} - Screenshot ${i + 1}`}
                                                className="w-full h-auto min-h-[300px]"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
