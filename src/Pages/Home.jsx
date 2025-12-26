// importing navbar and content components
import Navbar from "../Components/Navbar";
import Content from "../Components/Content";

// import use state
import { useState } from "react";

// home page
export default function Home() {
    // menu toggle
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative min-h-screen">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Content />

            {/* Footer */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-slate-400 w-full text-center">
                Made with <span className="text-red-500">❤️</span> by Aditya Chandel
            </p>
        </div>
    );
}