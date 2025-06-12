// react icons
import { GrMysql } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";

// Mainpage
export default function MainPage() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen pt-16 flex flex-row">
        <Left />
        <Right />
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
  { name: "SQL Introduction" },
  { name: "DBMS" },
  { name: "MySQL" }
]

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
      <div className="text-slate-400 text-xa pl-3 font-semibold uppercase">Get started</div>
      <div className='pt-5 pr-7 pb-5 w-85 border-b-2 border-slate-700 '>
        {array.map((arr, idx) => (
          <li className='group list-none py-2 px-5 font-semibold text-xl
          rounded-r-xl cursor-pointer flex flex-row items-center justify-between
          hover:bg-slate-800 text-slate-100' key={idx}>{arr.name}
            <IoIosArrowForward className="text-transparent group-hover:text-slate-100" />
          </li>
        ))}
      </div>

      <div className="text-slate-400 text-xa pl-3 pt-4 font-semibold uppercase">Learn sql</div>
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


// right column for pages
function Right() {
  return (
    <div className="flex-1 h-full overflow-y-auto p-3 px-5 bg-[#0F172A]">
      <Page1 />
    </div>
  );
}

// Content for each page

// page 1
function Page1() {
  return (
    <div className="h-full">
      <h1 className="text-8xl font-semibold text-slate-100">SQL Introduction</h1>
    </div>
  )
}