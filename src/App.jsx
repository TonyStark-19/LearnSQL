// react icons
import { GrMysql } from "react-icons/gr";

// Mainpage
export default function MainPage() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen pt-14 flex flex-row">
        <Left />
        <Right />
      </div>
    </>
  )
}

// navbar
function Navbar() {
  return (
    <div className="w-full fixed p-3 border-b-white border-b-2
      bg-slate-900">
      <div className="text-2xl font-semibold flex flex-row items-center gap-2
        text-white">LearnSQL
        <GrMysql className="text-2xl" />
      </div>
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
    <div className="w-96 h-full py-4
      border-r-white border-r-2 bg-slate-900">
      <div className="text-white text-xl pl-3 font-semibold">Get started</div>
      <div className='pt-5 pr-7 pb-5 w-85 border-b-2 border-white'>
        {array.map((arr, idx) => (
          <li className='list-none py-2 px-5 font-semibold text-xl rounded-r-xl cursor-pointer
          hover:bg-slate-800 text-white' key={idx}>{arr.name}</li>
        ))}
      </div>

      <div className='pt-5 pr-7 pb-5 w-85'>
        {array2.map((arr, idx) => (
          <li className='list-none py-2 px-5 font-semibold text-xl rounded-r-xl cursor-pointer
          hover:bg-slate-800 text-white' key={idx}>{arr.name}</li>
        ))}
      </div>
    </div>
  )
}

// right column for pages
function Right() {
  return (
    <div className="w-full p-3 px-5 min-h-screen overflow-x-hidden overflow-y-auto
      bg-slate-900">
      <div className="h-full">
        <h1 className="text-8xl font-semibold text-white">SQL</h1>
      </div>
    </div>
  )
}