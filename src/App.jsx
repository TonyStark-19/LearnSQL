// react icons
import { GrMysql } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

// react router
import { Routes, Route } from 'react-router-dom';

// import link
import { Link } from 'react-router-dom';

// import pages
import { Page1 } from "./pages";
import { Page2 } from "./pages";

// main export
export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
    </Routes>
  );
}

// Mainpage
function MainPage() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen pt-16 flex flex-row">
        <Left />

        <div className="flex-1 h-full overflow-y-auto pt-4 px-5 scrollbar-transparent bg-[#0F172A]">
          <div className="text-slate-400 text-xl pb-2 font-semibold uppercase">Learn sql</div>

          <Routes>
            <Route path="sql-intro" element={<Page1 />} />
            <Route path="dbms" element={<Page2 />} />
          </Routes>

          <div className="text-slate-400 py-3 pl-3 font-semibold">Made with ❤️ by Aditya chandel</div>
        </div>
      </div>
    </>
  )
}

// navbar
function Navbar() {
  return (
    <div className="w-full fixed p-3 flex flex-row items-center justify-between
      bg-[#0F172A] border-b-slate-700 border-b-2">
      <div className="text-2xl font-semibold flex flex-row items-center gap-2 cursor-default
        text-slate-100">LearnSQL
        <GrMysql className="text-2xl" />
      </div>

      <a href="https://github.com/TonyStark-19/LearnSQL">
        <button className="bg-transparent py-1.5 px-3 border-2 border-slate-700 rounded-xl cursor-pointer">
          <span className="text-slate-100 pr-1">Star on Github</span>⭐
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
  { name: "Create Database" },
  { name: "Drop Database" },
  { name: "Create Table" },
  { name: "SQL Datatypes" },
  { name: "SQL Commands" },
  { name: "Queries (Database)" },
  { name: "Queries (Tables)" },
  { name: "SQL Keys" },
  { name: "SQL Constraints" },
  { name: "SQL Select" },
  { name: "Where Clause" },
  { name: "SQL Operators" },
  { name: "Limit Clause" },
  { name: "Order By Clause" },
  { name: "Aggregate Functions" },
  { name: "Group By Clause" },
  { name: "Having Clause" },
  { name: "Cascading for FK" },
  { name: "More Queries (Tables)" },
  { name: "Joins in SQL" },
  { name: "SQL Sub Queries" },
  { name: "MySQL Views" },
  { name: "SQL Projects" },
  { name: "More Links" }
]

// left column for pages list
function Left() {
  return (
    <div className="w-96 h-full overflow-y-auto py-4 scrollbar-transparent
      border-r-slate-700 border-r-2 bg-[#0F172A]">
      <div className="text-slate-400 pl-3 font-semibold uppercase">Get started</div>
      <div className='pt-5 pr-7 pb-5 w-85 border-b-2 border-slate-700 '>
        {array.map((arr, idx) => (
          <Link to={arr.path} key={idx}>
            <li className='group list-none py-2 px-5 font-semibold text-xl
          rounded-r-xl cursor-pointer flex flex-row items-center justify-between
          hover:bg-slate-800 text-slate-100' key={idx}>{arr.name}
              <IoIosArrowForward className="text-transparent group-hover:text-slate-100" />
            </li>
          </Link>
        ))}
      </div>

      <div className="text-slate-400 pl-3 pt-4 font-semibold uppercase">Learn sql</div>
      <div className='pt-5 pr-7 pb-5 w-85'>
        {array2.map((arr, idx) => (
          <li className='group list-none py-2 px-5 font-semibold text-xl
          rounded-r-xl cursor-pointer flex flex-row items-center justify-between
            hover:bg-slate-800 text-slate-100' key={idx}>{arr.name}
            <IoIosArrowForward className="text-transparent group-hover:text-slate-100" />
          </li>
        ))}
      </div>
    </div>
  );
}