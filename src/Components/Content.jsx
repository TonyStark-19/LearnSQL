import { Link } from "react-router-dom";

// home page content component
export default function Content() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div className="space-y-6">
                    <span className="inline-block text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                        SQL Documentation
                    </span>

                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                        Learn SQL <br />
                        <span className="text-emerald-400">From Basics to Confident Queries</span>
                    </h1>

                    <p className="text-slate-300 text-lg max-w-xl">
                        A clean, beginner-friendly SQL documentation that helps you understand
                        databases, write real queries, and build a strong foundation step by step.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 transition rounded-xl font-semibold shadow-lg shadow-emerald-500/20
                        cursor-pointer">
                            MySQL Installation Guide
                        </button>
                        <Link to="/docs/sql-intro">
                            <button className="px-6 py-3 border border-slate-700 hover:border-slate-500 transition rounded-xl font-medium text-slate-300
                            cursor-pointer">
                                View Documentation
                            </button>
                        </Link>
                    </div>
                </div>

                {/* RIGHT CODE SHELL */}
                <div className="relative mt-14">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
                        {/* Window Header */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/60 border-b border-slate-700">
                            <span className="w-3 h-3 rounded-full bg-red-500" />
                            <span className="w-3 h-3 rounded-full bg-yellow-400" />
                            <span className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="ml-4 text-xs text-slate-400">example.sql</span>
                        </div>

                        {/* Code */}
                        <pre className="p-6 text-sm text-slate-200 overflow-x-auto">
                            <code>
                                <span className="text-slate-500">
                                    -- Fetch active users with order details for analytics
                                </span>{"\n"}
                                <span className="text-pink-400">SELECT</span>{" "}
                                <span className="text-slate-200">
                                    u.id, u.name, u.email,
                                </span>{"\n"}
                                <span className="text-slate-200">
                                    COUNT(o.id) AS total_orders,
                                </span>{"\n"}
                                <span className="text-slate-200">
                                    SUM(o.amount) AS total_spent
                                </span>{"\n"}
                                <span className="text-pink-400">FROM</span>{" "}
                                <span className="text-emerald-400">users u</span>{"\n"}
                                <span className="text-pink-400">LEFT JOIN</span>{" "}
                                <span className="text-emerald-400">orders o</span>{" "}
                                <span className="text-pink-400">ON</span>{" "}
                                <span className="text-slate-200">u.id = o.user_id</span>{"\n"}
                                <span className="text-pink-400">WHERE</span>{" "}
                                <span className="text-slate-200">u.status = </span>
                                <span className="text-amber-400">'active'</span>{"\n"}
                                <span className="text-pink-400">AND</span>{" "}
                                <span className="text-slate-200">YEAR(u.created_at) = </span>
                                <span className="text-amber-400">2024</span>{"\n"}
                                <span className="text-pink-400">GROUP BY</span>{" "}
                                <span className="text-slate-200">u.id, u.name, u.email</span>{"\n"}
                                <span className="text-pink-400">HAVING</span>{" "}
                                <span className="text-slate-200">total_orders &gt; </span>
                                <span className="text-amber-400">0</span>{"\n"}
                                <span className="text-pink-400">ORDER BY</span>{" "}
                                <span className="text-slate-200">total_spent </span>
                                <span className="text-pink-400">DESC</span>{"\n"}
                                <span className="text-pink-400">LIMIT</span>{" "}
                                <span className="text-amber-400">10</span>;
                            </code>
                        </pre>

                    </div>

                    <p className="mt-4 text-xs text-slate-500 text-center">
                        Real SQL queries, explained clearly — line by line
                    </p>
                </div>
            </div>
        </section>
    );
}