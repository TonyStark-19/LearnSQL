// import navbar
import Navbar from "../Components/Navbar";

export default function About() {
    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
                <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">

                    {/* HEADER */}
                    <div className="mb-16">
                        <span className="inline-block text-sm font-medium text-emerald-400 bg-emerald-400/10 px-4 py-1 rounded-full mb-4">
                            About LearnSQL
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Simple, Practical SQL Documentation
                        </h1>

                        <p className="text-slate-300 mt-5 max-w-3xl text-lg">
                            LearnSQL is a clean, beginner-friendly SQL documentation platform
                            created while learning SQL from scratch — focused on clarity,
                            real queries, and practical understanding.
                        </p>
                    </div>

                    {/* WHAT IS LEARNSQL */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-semibold mb-4">
                            What is LearnSQL?
                        </h2>

                        <p className="text-slate-300 leading-relaxed max-w-4xl">
                            LearnSQL is a self-built SQL documentation website designed to
                            make SQL easier to understand for beginners.
                            It explains SQL concepts using clear language, structured notes,
                            and real SQL queries executed in MySQL.
                        </p>

                        <p className="text-slate-300 leading-relaxed max-w-4xl mt-4">
                            Instead of abstract theory, LearnSQL focuses on how SQL is actually
                            written and used — just like you would in a real database environment.
                        </p>
                    </section>

                    {/* HOW IT HELPS */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-semibold mb-6">
                            What makes LearnSQL different?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                                <h3 className="text-xl font-semibold mb-2">
                                    Real SQL Queries
                                </h3>
                                <p className="text-slate-300">
                                    Concepts are explained using actual SQL queries
                                    executed in MySQL Workbench, with screenshots to
                                    show how queries work in practice.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                                <h3 className="text-xl font-semibold mb-2">
                                    Beginner-Friendly Documentation
                                </h3>
                                <p className="text-slate-300">
                                    Written in simple language with step-by-step explanations,
                                    making it easy to follow even if you are new to databases.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                                <h3 className="text-xl font-semibold mb-2">
                                    SQL Cheatsheet
                                </h3>
                                <p className="text-slate-300">
                                    A concise SQL cheatsheet covering commonly used commands
                                    and patterns for quick reference and revision.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                                <h3 className="text-xl font-semibold mb-2">
                                    MySQL Setup Guides
                                </h3>
                                <p className="text-slate-300">
                                    Step-by-step MySQL installation guides for both
                                    Windows and macOS to help beginners get started easily.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* PHILOSOPHY */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-semibold mb-4">
                            Learning approach
                        </h2>

                        <p className="text-slate-300 leading-relaxed max-w-4xl">
                            LearnSQL follows a documentation-first learning approach.
                            Each topic is structured, easy to navigate, and focused
                            on understanding how SQL works in real-world scenarios.
                        </p>

                        <p className="text-slate-300 leading-relaxed max-w-4xl mt-4">
                            The UI is intentionally kept clean and distraction-free
                            so learners can focus entirely on reading, understanding,
                            and practicing SQL.
                        </p>
                    </section>

                    {/* FOOTER NOTE */}
                    <section className="border-t border-slate-800 pt-10">
                        <p className="text-slate-400 max-w-3xl">
                            LearnSQL is continuously evolving with better explanations,
                            more real examples, and improved documentation as the
                            learning journey continues.
                        </p>
                    </section>

                </div>
            </section>
        </>
    );
}