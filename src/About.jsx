// import navbar
import Navbar from "./Components/Navbar";

export default function About() {
    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
                <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">

                    {/* PAGE HEADER */}
                    <div className="mb-16">
                        <span className="inline-block text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full mb-4">
                            About LearnSQL
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold">
                            Learn SQL the Simple & Practical Way
                        </h1>

                        <p className="text-slate-300 mt-5 max-w-3xl text-lg">
                            LearnSQL is a beginner-friendly SQL documentation platform designed
                            to help you understand SQL concepts clearly, practice effectively,
                            and use SQL confidently in real-world scenarios.
                        </p>
                    </div>

                    {/* WHAT IS LEARNSQL */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-semibold mb-4">
                            What is LearnSQL?
                        </h2>

                        <p className="text-slate-300 leading-relaxed max-w-4xl">
                            LearnSQL is a structured SQL learning resource that combines
                            clear explanations, practical examples, and quick-reference
                            cheatsheets. Instead of overwhelming theory, it focuses on
                            real usage — how SQL is actually written, read, and used in
                            databases.
                        </p>
                    </section>

                    {/* WHO IS IT FOR */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-semibold mb-6">
                            Who is LearnSQL for?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                                <h3 className="text-xl font-semibold mb-2">
                                    Beginners
                                </h3>
                                <p className="text-slate-300">
                                    If you are new to SQL, LearnSQL helps you understand
                                    concepts step-by-step with simple language and examples.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                                <h3 className="text-xl font-semibold mb-2">
                                    Students & Job Seekers
                                </h3>
                                <p className="text-slate-300">
                                    Ideal for interview preparation, college exams, and
                                    revising SQL concepts quickly before assessments.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                                <h3 className="text-xl font-semibold mb-2">
                                    Developers
                                </h3>
                                <p className="text-slate-300">
                                    Use it as a quick reference for SQL syntax, joins,
                                    subqueries, and aggregate functions.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                                <h3 className="text-xl font-semibold mb-2">
                                    Data & Analytics Learners
                                </h3>
                                <p className="text-slate-300">
                                    Strengthen your SQL foundation for data analysis,
                                    data science, and backend development.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* WHAT YOU WILL LEARN */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-semibold mb-6">
                            What you’ll learn
                        </h2>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
                            <li>• SQL basics and database fundamentals</li>
                            <li>• DDL & DML commands</li>
                            <li>• Filtering, sorting, and grouping data</li>
                            <li>• Aggregate functions</li>
                            <li>• Joins and relationships</li>
                            <li>• Subqueries and nested queries</li>
                            <li>• Practical SQL patterns and examples</li>
                        </ul>
                    </section>

                    {/* PHILOSOPHY */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-semibold mb-4">
                            Learning philosophy
                        </h2>

                        <p className="text-slate-300 leading-relaxed max-w-4xl">
                            LearnSQL is built on the idea that SQL is best learned by
                            understanding patterns and practicing real queries.
                            The documentation avoids unnecessary complexity and focuses
                            on clarity, consistency, and real-world relevance.
                        </p>
                    </section>

                    {/* FOOTER NOTE */}
                    <section className="border-t border-slate-800 pt-10">
                        <p className="text-slate-400 max-w-3xl">
                            LearnSQL is continuously evolving with more examples,
                            improved explanations, and additional topics to help
                            learners at every stage.
                        </p>
                    </section>

                </div>
            </section>
        </>
    );
}