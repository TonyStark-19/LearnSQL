// Navbar component
export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-slate-950/80 border-b border-slate-800">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* LOGO */}
                <div className="flex items-center">
                    <span className="text-emerald-400 font-bold text-xl">Learn</span>
                    <span className="text-white font-bold text-xl">SQL</span>
                </div>

                {/* NAV LINKS */}
                <ul className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
                    <li className="hover:text-white transition cursor-pointer">Docs</li>
                    <li className="hover:text-white transition cursor-pointer">Examples</li>
                    <li className="hover:text-white transition cursor-pointer">Roadmap</li>
                    <li className="hover:text-white transition cursor-pointer">About</li>
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <button className="hidden sm:block px-5 py-2 text-sm font-medium text-slate-300 hover:text-white transition">
                        Sign In
                    </button>
                    <button className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 transition rounded-xl text-sm font-semibold shadow-lg shadow-emerald-500/20">
                        Get Started
                    </button>
                </div>
            </nav>
        </header>
    );
}