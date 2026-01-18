// import link
import { Link } from "react-router-dom";

// react icons
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";

// import navbar and footer
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// import card and pill components
import Card from "../Components/Card";
import Pill from "../Components/Pill";

// import use state
import { useState } from "react";

// About page component
export default function About() {
    // menu toggle
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white sm:pt-16 max-sm:pt-10 sm:px-10 max-sm:px-3">

                {/* ABOUT INTRO */}
                <section>
                    <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* LEFT TEXT */}
                        <div className="space-y-5">
                            <span className="text-sm font-medium text-emerald-400 uppercase tracking-wide">
                                About the Project
                            </span>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-100">
                                LearnSQL is built <br />
                                <span className="text-emerald-400">while learning SQL</span>
                            </h1>

                            <p className="text-slate-300 text-lg max-w-xl">
                                This platform documents the SQL learning journey from scratch — focusing
                                on real queries, real database behavior, and practical understanding
                                instead of theory-heavy explanations.
                            </p>

                            <p className="text-slate-400 max-w-xl">
                                Every page, query, and example exists to make SQL feel less intimidating
                                and more approachable for beginners.
                            </p>
                        </div>

                        {/* RIGHT INFO CARD */}
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-xl">
                            <div>
                                <p className="text-sm text-slate-400">Focus</p>
                                <p className="text-slate-200 font-medium">
                                    Beginner-first SQL documentation
                                </p>
                            </div>

                            <div className="h-px bg-slate-800" />

                            <div>
                                <p className="text-sm text-slate-400">Database Used</p>
                                <p className="text-emerald-400 font-medium">
                                    MySQL Community Server
                                </p>
                            </div>

                            <div className="h-px bg-slate-800" />

                            <div>
                                <p className="text-sm text-slate-400">Learning Style</p>
                                <p className="text-slate-200 font-medium">
                                    Real queries • Real output • Clear explanations
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* WHY */}
                <section className="max-w-7xl mx-auto px-6 py-20 border-t border-b border-slate-800">
                    <h2 className="text-3xl font-bold mb-6">
                        Why LearnSQL Exists
                    </h2>
                    <p className="max-w-3xl text-slate-300 leading-relaxed">
                        Most SQL resources are either too theoretical or overwhelming for
                        beginners. LearnSQL was created to bridge that gap by documenting SQL
                        concepts while learning them — focusing on how queries actually behave
                        inside a real database like MySQL.
                    </p>
                </section>

                {/* FEATURES */}
                <section className="max-w-7xl mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold mb-10">
                        What You’ll Find on LearnSQL
                    </h2>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Card
                            title="Beginner-Friendly Docs"
                            desc="Clear explanations of SQL concepts written from a learner’s perspective."
                        />
                        <Card
                            title="SQL Cheatsheet"
                            desc="Quick access to commonly used SQL syntax, clauses, and functions."
                        />
                        <Card
                            title="MySQL Installation Guide"
                            desc="Step-by-step setup guides for MySQL on Windows and macOS."
                        />
                        <Card
                            title="Real Query Examples"
                            desc="Actual SQL queries with screenshots from MySQL Workbench."
                        />
                        <Card
                            title="Learning Resources"
                            desc="Curated notes and references to strengthen SQL fundamentals."
                        />
                        <Card
                            title="Practice-Focused"
                            desc="Less theory, more understanding through practical examples."
                        />
                    </div>
                </section>

                {/* DIFFERENT */}
                <section className="max-w-7xl mx-auto sm:px-6 max-sm:px-2 py-20 border-t border-b border-slate-800">
                    <h2 className="text-3xl font-bold mb-10">
                        How LearnSQL Is Different
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 text-slate-300">
                        <ul className="space-y-4">
                            <li className="border border-slate-800 p-3 rounded-full flex flex-row items-center gap-4">
                                <div className="bg-red-600 rounded-full p-2.5"><ImCross /></div>
                                Heavy textbook-style explanations
                            </li>
                            <li className="border border-slate-800 p-3 rounded-full flex flex-row items-center gap-4">
                                <div className="bg-red-600 rounded-full p-2.5"><ImCross /></div>
                                SQL concepts without real output
                            </li>
                            <li className="border border-slate-800 p-3 rounded-full flex flex-row items-center gap-4">
                                <div className="bg-red-600 rounded-full p-2.5"><ImCross /></div>
                                Content written only for experts
                            </li>
                        </ul>
                        <ul className="space-y-4">
                            <li className="border border-slate-800 p-3 rounded-full flex flex-row items-center gap-4">
                                <div className="bg-green-700 rounded-full p-2.5"><FaCheck /></div>
                                Written while learning SQL
                            </li>
                            <li className="border border-slate-800 p-3 rounded-full flex flex-row items-center gap-4">
                                <div className="bg-green-700 rounded-full p-2.5"><FaCheck /></div>
                                Real MySQL queries & results
                            </li>
                            <li className="border border-slate-800 p-3 rounded-full flex flex-row items-center gap-4">
                                <div className="bg-green-700 rounded-full p-2.5"><FaCheck /></div>
                                Beginner-first explanations
                            </li>
                        </ul>
                    </div>
                </section>

                {/* BUILDER */}
                <section className="max-w-7xl mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold mb-6">
                        Built by a Learner, for Learners
                    </h2>
                    <p className="max-w-3xl text-slate-300 leading-relaxed">
                        LearnSQL is built by someone actively learning SQL and documenting
                        everything along the way. The goal is simple — help beginners gain
                        confidence in writing SQL queries through clarity and practice.
                    </p>
                </section>

                {/* WHO */}
                <section className="max-w-7xl mx-auto px-6 py-20 border-t border-b border-slate-800">
                    <h2 className="text-3xl font-bold mb-8">
                        Who Is LearnSQL For?
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <Pill text="SQL Beginners" />
                        <Pill text="College Students" />
                        <Pill text="Self-Taught Developers" />
                        <Pill text="MySQL Learners" />
                    </div>
                </section>

                {/* CTA */}
                <section>
                    <div className="max-w-7xl mx-auto px-6 sm:py-24 max-sm:py-16 text-center">
                        <h2 className="sm:text-4xl max-sm:text-3xl font-bold">
                            Start Learning SQL with Confidence
                        </h2>
                        <p className="mt-4 text-slate-300">
                            Real queries, real understanding, zero confusion.
                        </p>

                        <div className="mt-8 flex justify-center gap-4 max-[500px]:flex-col max-[500px]:items-center w-full">
                            <Link to="/docs/sql-intro" className="max-[500px]:w-full">
                                <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 transition rounded-xl font-semibold shadow-lg
                                shadow-emerald-500/20 cursor-pointer w-full">
                                    Get Started
                                </button>
                            </Link>
                            <Link to="/cheatsheet" className="max-[500px]:w-full">
                                <button className="px-8 py-3 border border-slate-700 hover:border-slate-500 transition rounded-xl text-slate-300
                                cursor-pointer w-full">
                                    View Cheatsheet
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />

            </main>
        </>
    );
}