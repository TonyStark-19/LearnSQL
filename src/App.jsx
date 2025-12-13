// react icons
import { GrMysql } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

// import use location and react
import { BrowserRouter as Router, useLocation, Routes, Route } from "react-router-dom";

// import use effect and use ref
import { useEffect, useRef, useState } from "react";

// import use navigate
import { Navigate } from 'react-router-dom';

// import link
import { Link } from 'react-router-dom';

// import pages
import {
  Page1, Page2, Page3, Page4, Page6, Page7, Page8, Page9, Page10, Page11, Page12, Page13, Page14,
  Page15, Page16, Page17, Page18, Page19, Page20, Page21, Page22, Page23, Page24, Page25, Page26, Page27
} from "./pages";

import Home from "./Home";

// main app
export default function App() {
  // use ref for scroll to top
  const scrollRef = useRef(null);

  return (
    <>
      <ScrollToTop scrollRef={scrollRef} />
      <Routes>
        <Route path="/*" element={<MainPage scrollRef={scrollRef} />} />
      </Routes>
    </>
  );
}

// Mainpage
function MainPage({ scrollRef }) {
  // menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar setMenuOpen={setMenuOpen} />

      <div className="w-full h-screen pt-16 flex flex-row">
        <Left menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div ref={scrollRef} className="flex-1 h-full overflow-y-auto pt-4 min-sm:px-5 max-sm:px-3 
        scrollbar-transparent bg-[#0F172A]">
          <div className="text-slate-400 text-xl pb-2 font-semibold uppercase">Learn sql</div>

          <Routes>
            <Route path="/" element={<Navigate to="/sql-intro" replace />} />
            <Route path="sql-intro" element={<Page1 />} />
            <Route path="dbms" element={<Page2 />} />
            <Route path="mysql" element={<Page3 />} />
            <Route path="create-DB" element={<Page4 />} />
            <Route path="create-table" element={<Page6 />} />
            <Route path="datatypes" element={<Page7 />} />
            <Route path="commands" element={<Page8 />} />
            <Route path="queries-DB" element={<Page9 />} />
            <Route path="queries-tables" element={<Page10 />} />
            <Route path="keys" element={<Page11 />} />
            <Route path="constraints" element={<Page12 />} />
            <Route path="select" element={<Page13 />} />
            <Route path="where-cl" element={<Page14 />} />
            <Route path="operators" element={<Page15 />} />
            <Route path="limit-cl" element={<Page16 />} />
            <Route path="order-by" element={<Page17 />} />
            <Route path="aggregate" element={<Page18 />} />
            <Route path="group-by" element={<Page19 />} />
            <Route path="having-cl" element={<Page20 />} />
            <Route path="cascading" element={<Page21 />} />
            <Route path="More-queries" element={<Page22 />} />
            <Route path="joins" element={<Page23 />} />
            <Route path="sub-queries" element={<Page24 />} />
            <Route path="views" element={<Page25 />} />
            <Route path="projects" element={<Page26 />} />
            <Route path="links" element={<Page27 />} />
          </Routes>

          <div className="text-slate-400 py-3 font-semibold">Made with ❤️ by Aditya chandel</div>
        </div>
      </div>
    </>
  )
}

// scroll to top function
function ScrollToTop({ scrollRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollRef?.current) {
      scrollRef.current.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

// navbar
function Navbar({ setMenuOpen }) {
  return (
    <div className="w-full fixed p-3 flex flex-row items-center justify-between
      bg-[#0F172A] border-b-slate-700 border-b-2">
      <div className="flex flex-row items-center justify-center gap-2">
        <button className="text-4xl text-white min-lg:hidden cursor-pointer" onClick={() => setMenuOpen(prev => !prev)}>
          <IoMenu />
        </button>

        <Link to="/sql-intro">
          <div className="text-2xl font-semibold flex flex-row items-center gap-2 cursor-pointer
        text-slate-100">LearnSQL
            <GrMysql className="text-2xl" />
          </div>
        </Link>
      </div>

      <a href="https://github.com/TonyStark-19/LearnSQL">
        <button className="bg-transparent py-1.5 px-3 border-2 border-slate-700 rounded-xl cursor-pointer">
          <span className="text-slate-100 pr-1 max-a:hidden">Star on Github</span>⭐
        </button>
      </a>
    </div>
  )
}

// list of pages 1
const array = [
  { name: "SQL Introduction", path: "/sql-intro" },
  { name: "DBMS", path: "/dbms" },
  { name: "MySQL", path: "/mysql" }
];

// list of pages 2
const array2 = [
  { name: "Create Database", path: "/create-DB" },
  { name: "Create Table", path: "/create-table" },
  { name: "SQL Datatypes", path: "/datatypes" },
  { name: "SQL Commands", path: "/commands" },
  { name: "Queries (Database)", path: "/queries-DB" },
  { name: "Queries (Tables)", path: "/queries-tables" },
  { name: "SQL Keys", path: "/keys" },
  { name: "SQL Constraints", path: "/constraints" },
  { name: "SQL Select", path: "/select" },
  { name: "Where Clause", path: "/where-cl" },
  { name: "SQL Operators", path: "/operators" },
  { name: "Limit Clause", path: "/limit-cl" },
  { name: "Order By Clause", path: "/order-by" },
  { name: "Aggregate Functions", path: "/aggregate" },
  { name: "Group By Clause", path: "/group-by" },
  { name: "Having Clause", path: "/having-cl" },
  { name: "Cascading for FK", path: "/cascading" },
  { name: "More Queries (Tables)", path: "/More-queries" },
  { name: "Joins in SQL", path: "/joins" },
  { name: "SQL Sub Queries", path: "/sub-queries" },
  { name: "MySQL Views", path: "/views" }
]

// list of pages 3
const array3 = [
  { name: "SQL Projects", path: "/projects" },
  { name: "More Links", path: "/links" }
];

// left column for pages list
function Left({ menuOpen, setMenuOpen }) {
  // use location
  const location = useLocation();

  return (
    <div className={`w-96 h-full overflow-y-auto py-4 scrollbar-transparent
    border-r-slate-700 border-r-2 bg-[#0F172A]
    max-lg:fixed max-lg:w-full max-lg:top-16 max-lg:z-50 max-lg:pb-14 max-lg:transition-transform max-lg:duration-300
    ${menuOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"}`}>
      <div className="text-slate-400 pl-3 font-semibold uppercase">Get started</div>
      <div className='py-3 pr-7 w-85 border-b-2 border-slate-700
      min-lg:w-85 max-lg:w-full'>
        {array.map((arr, idx) => (
          <Link to={arr.path} key={idx} onClick={() => setMenuOpen(false)}>
            <li className={`group list-none py-2 px-5 my-2 font-semibold text-xl
            rounded-r-xl cursor-pointer flex flex-row items-center justify-between
            hover:bg-slate-800 text-slate-100 ${location.pathname === arr.path ? 'bg-slate-800' : ''}`}>
              {arr.name}
              <IoIosArrowForward className={`${location.pathname === arr.path ?
                "text-white" : "text-transparent group-hover:text-slate-100"}`} />
            </li>
          </Link>
        ))}
      </div>

      <div className="text-slate-400 pl-3 pt-4 font-semibold uppercase">Learn sql</div>
      <div className='py-3 pr-7 pb-5 w-85 border-b-2 border-slate-700
      min-lg:w-85 max-lg:w-full'>
        {array2.map((arr, idx) => (
          <Link to={arr.path} key={idx} onClick={() => setMenuOpen(false)}>
            <li className={`group list-none py-2 px-5 my-2 font-semibold text-xl
            rounded-r-xl cursor-pointer flex flex-row items-center justify-between
            hover:bg-slate-800 text-slate-100 ${location.pathname === arr.path ? 'bg-slate-800' : ''}`}>
              {arr.name}
              <IoIosArrowForward className={`${location.pathname === arr.path ?
                "text-white" : "text-transparent group-hover:text-slate-100"}`} />
            </li>
          </Link>
        ))}
      </div>

      <div className="text-slate-400 pl-3 pt-4 font-semibold uppercase">Resources</div>
      <div className='py-3 pr-7 pb-5 w-85
      min-lg:w-85 max-lg:w-full'>
        {array3.map((arr, idx) => (
          <Link to={arr.path} key={idx} onClick={() => setMenuOpen(false)}>
            <li className={`group list-none py-2 px-5 my-2 font-semibold text-xl
            rounded-r-xl cursor-pointer flex flex-row items-center justify-between
            hover:bg-slate-800 text-slate-100 ${location.pathname === arr.path ? 'bg-slate-800' : ''}`}>
              {arr.name}
              <IoIosArrowForward className={`${location.pathname === arr.path ?
                "text-white" : "text-transparent group-hover:text-slate-100"}`} />
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
}