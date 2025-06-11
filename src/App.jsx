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
    <div className="w-full fixed p-3 border-b-white border-b-2 flex flex-row items-center justify-between
      bg-slate-900/95">
      <div className="text-2xl font-semibold flex flex-row items-center gap-2
        text-white">LearnSQL
        <GrMysql className="text-2xl" />
      </div>

      <button className="bg-transparent py-1.5 px-2 border-2 border-gray-400 rounded-lg cursor-pointer">
        <span className="text-white pr-1">Star on Github</span>⭐
      </button>
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
  { name: "SQL" },
  { name: "Create Database" },
  { name: "Drop Database" },
  { name: "SQL" },
  { name: "Create Database" },
  { name: "Drop Database" },
  { name: "SQL" },
  { name: "Create Database" },
  { name: "Drop Database" },
  { name: "SQL" }
]

// left column for pages list
function Left() {
  return (
    <div className="w-96 h-full overflow-y-auto py-4 scrollbar-transparent
      border-r-white border-r-2 bg-slate-900/95">
      <div className="text-gray-400 text-xa pl-3 font-semibold uppercase">Get started</div>
      <div className='pt-5 pr-7 pb-5 w-85 border-b-2 border-white'>
        {array.map((arr, idx) => (
          <li className='group list-none py-2 px-5 font-semibold text-xl
          rounded-r-xl cursor-pointer flex flex-row items-center justify-between
          hover:bg-slate-800 text-white' key={idx}>{arr.name}
            <IoIosArrowForward className="text-transparent group-hover:text-white" />
          </li>
        ))}
      </div>

      <div className="text-gray-400 text-xa pl-3 pt-4 font-semibold uppercase">Learn sql</div>
      <div className='pt-5 pr-7 pb-5 w-85'>
        {array2.map((arr, idx) => (
          <li className='group list-none py-2 px-5 font-semibold text-xl
          rounded-r-xl cursor-pointer flex flex-row items-center justify-between
            hover:bg-slate-800 text-white' key={idx}>{arr.name}
            <IoIosArrowForward className="text-transparent group-hover:text-white" />
          </li>
        ))}
      </div>
    </div>
  );
}


// right column for pages
function Right() {
  return (
    <div className="flex-1 h-full overflow-y-auto p-3 px-5 bg-slate-900/95">
      <div className="h-full">
        <h1 className="text-7xl font-semibold text-white">SQL (Structured Query Language)</h1>
      </div>
    </div>
  );
}