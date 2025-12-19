// import routers
import { Routes, Route } from "react-router-dom";

// import use state and use ref
import { useRef, useState } from "react";

// import use navigate
import { Navigate } from 'react-router-dom';

// import pages
import {
  Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10, Page11, Page12, Page13, Page14,
  Page15, Page16, Page17, Page18, Page19, Page20, Page21, Page22, Page23, Page24, Page25, Page26
} from "./pages";

// home components
import Navbar2 from "./Components/Navbar2";
import Home from "./Home";
import Left from "./Components/LeftSideBar";
import ScrollToTop from "./Components/Scroltotop";

// main app
export default function App() {
  // use ref for scroll to top
  const scrollRef = useRef(null);

  return (
    <>
      <ScrollToTop scrollRef={scrollRef} />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Documentation */}
        <Route path="/docs/*" element={<Docs scrollRef={scrollRef} />} />
      </Routes>
    </>
  );
}

// Mainpage
function Docs({ scrollRef }) {
  // menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar2 setMenuOpen={setMenuOpen} />

      <div className="w-full h-screen pt-16 flex flex-row bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Left menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div ref={scrollRef} className="flex-1 h-full overflow-y-auto pt-4 min-sm:px-5 max-sm:px-3 
        scrollbar-transparent">
          <h1 className="text-slate-100 text-2xl font-semibold tracking-wide">
            Learn SQL
          </h1>

          <Routes>
            <Route path="/" element={<Navigate to="sql-intro" replace />} />

            <Route path="sql-intro" element={<Page1 />} />
            <Route path="dbms" element={<Page2 />} />
            <Route path="mysql" element={<Page3 />} />
            <Route path="create-DB" element={<Page4 />} />
            <Route path="create-table" element={<Page5 />} />
            <Route path="datatypes" element={<Page6 />} />
            <Route path="commands" element={<Page7 />} />
            <Route path="queries-DB" element={<Page8 />} />
            <Route path="queries-tables" element={<Page9 />} />
            <Route path="keys" element={<Page10 />} />
            <Route path="constraints" element={<Page11 />} />
            <Route path="select" element={<Page12 />} />
            <Route path="where-cl" element={<Page13 />} />
            <Route path="operators" element={<Page14 />} />
            <Route path="limit-cl" element={<Page15 />} />
            <Route path="order-by" element={<Page16 />} />
            <Route path="aggregate" element={<Page17 />} />
            <Route path="group-by" element={<Page18 />} />
            <Route path="having-cl" element={<Page19 />} />
            <Route path="cascading" element={<Page20 />} />
            <Route path="More-queries" element={<Page21 />} />
            <Route path="joins" element={<Page22 />} />
            <Route path="sub-queries" element={<Page23 />} />
            <Route path="views" element={<Page24 />} />
            <Route path="projects" element={<Page25 />} />
            <Route path="links" element={<Page26 />} />
          </Routes>

          <div className="text-slate-500 py-4 text-sm">
            Made with ❤️ by <span className="text-emerald-400">Aditya Chandel</span>
          </div>
        </div>
      </div>
    </>
  )
}