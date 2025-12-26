// import link
import { Link } from 'react-router-dom';

// react icons
import { IoMenu } from "react-icons/io5";

// navbar component
export default function Navbar2({ setMenuOpen }) {
    return (
        <div className="w-full fixed p-3 flex flex-row items-center justify-between backdrop-blur bg-slate-950/80 border-b border-slate-800">
            <div className="flex flex-row items-center justify-center gap-2">
                <button className="text-4xl text-white min-lg:hidden cursor-pointer" onClick={() => setMenuOpen(prev => !prev)}>
                    <IoMenu />
                </button>

                <Link to="/">
                    <div className="text-2xl font-semibold flex items-center cursor-pointer">
                        <span className="text-emerald-400">Learn</span>
                        <span className="text-slate-100">SQL</span>
                    </div>
                </Link>
            </div>

            <a href="https://github.com/TonyStark-19/LearnSQL">
                <button className="flex items-center gap-2 py-1.5 px-4 border border-slate-700 rounded-xl text-slate-300 hover:text-white
                hover:border-emerald-400 transition cursor-pointer">
                    ⭐ <span className="max-a:hidden">Star on GitHub</span>
                </button>
            </a>
        </div>
    )
}