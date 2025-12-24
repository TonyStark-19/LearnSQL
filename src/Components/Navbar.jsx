// react icons
import { FiGithub } from "react-icons/fi";

// import link
import { Link } from "react-router-dom";

// Navbar component
export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-slate-950/80 border-b border-slate-800">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* LOGO */}
                <Link to="/">
                    <div className="flex items-center">
                        <span className="text-emerald-400 font-bold text-xl">Learn</span>
                        <span className="text-white font-bold text-xl">SQL</span>
                    </div>
                </Link>

                {/* NAV LINKS */}
                <ul className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
                    <Link to="/docs/sql-intro">
                        <li className="hover:text-white transition cursor-pointer">Docs</li>
                    </Link>
                    <Link to="/mysql-setup">
                        <li className="hover:text-white transition cursor-pointer">MySQL Setup</li>
                    </Link>
                    <Link to="/cheatsheet">
                        <li className="hover:text-white transition cursor-pointer">Cheatsheet</li>
                    </Link>
                    <Link to="/about">
                        <li className="hover:text-white transition cursor-pointer">About</li>
                    </Link>
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/TonyStark-19/LearnSQL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-white transition text-xl"
                        aria-label="GitHub Repository"
                    >
                        <FiGithub />
                    </a>

                    <a
                        href="https://github.com/your-username/learnsql/blob/main/CONTRIBUTING.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 transition rounded-xl text-sm font-semibold shadow-lg shadow-emerald-500/20"
                    >
                        Contribute
                    </a>
                </div>

            </nav>
        </header>
    );
}