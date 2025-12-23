// importing navbar and content components
import Navbar from "../Components/Navbar";
import Content from "../Components/Content";

// home page
export default function Home() {
    return (
        <div className="relative min-h-screen">
            <Navbar />
            <Content />

            {/* Footer */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-slate-400">
                Made with <span className="text-red-500">❤️</span> by Aditya Chandel
            </p>
        </div>
    );
}