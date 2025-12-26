// react icons
import { FiGithub, FiMenu, FiX } from "react-icons/fi";

// import link
import { Link } from "react-router-dom";

// navbar component
export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-slate-950/80 border-b border-slate-800">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LEFT: LOGO + MENU TOGGLE */}
                <div className="flex items-center gap-4">
                    {/* MOBILE MENU TOGGLE */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-slate-300 hover:text-white transition text-2xl"
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>

                    {/* LOGO */}
                    <Link to="/">
                        <div className="flex items-center">
                            <span className="text-emerald-400 font-bold text-xl">Learn</span>
                            <span className="text-white font-bold text-xl">SQL</span>
                        </div>
                    </Link>
                </div>

                {/* DESKTOP LINKS */}
                <ul className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
                    <li className="hover:text-white"><Link to="/docs/sql-intro">Docs</Link></li>
                    <li className="hover:text-white"><Link to="/cheatsheet">Cheatsheet</Link></li>
                    <li className="hover:text-white"><Link to="/mysql-setup">MySQL Setup</Link></li>
                    <li className="hover:text-white"><Link to="/about">About</Link></li>
                </ul>

                {/* RIGHT CTA */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/TonyStark-19/LearnSQL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-white text-xl"
                    >
                        <FiGithub />
                    </a>

                    <a
                        href="https://github.com/your-username/learnsql/blob/main/CONTRIBUTING.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-xl text-sm font-semibold shadow-lg shadow-emerald-500/20"
                    >
                        Contribute
                    </a>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden 
                ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <ul className="flex flex-col gap-4 px-6 py-6 bg-slate-950 border-t border-slate-800 text-slate-300">
                    {[
                        ["Docs", "/docs/sql-intro"],
                        ["Cheatsheet", "/cheatsheet"],
                        ["MySQL Setup", "/mysql-setup"],
                        ["About", "/about"],
                    ].map(([label, path]) => (
                        <li key={path} className="hover:text-white">
                            <Link to={path} onClick={() => setMenuOpen(false)}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}