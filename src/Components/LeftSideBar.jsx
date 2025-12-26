// import link
import { Link } from 'react-router-dom';

// react icons
import { IoIosArrowForward } from "react-icons/io";

// import use location and react
import { BrowserRouter as Router, useLocation, Routes, Route } from "react-router-dom";

// Foundations
const fundamentals = [
    { name: "SQL Introduction", path: "/docs/sql-intro" },
    { name: "DBMS", path: "/docs/dbms" },
    { name: "MySQL", path: "/docs/mysql" }
];

// Database & Table Basics (DDL)
const ddl = [
    { name: "Create Database", path: "/docs/create-DB" },
    { name: "Create Table", path: "/docs/create-table" },
    { name: "SQL Datatypes", path: "/docs/datatypes" },
    { name: "SQL Keys", path: "/docs/keys" },
    { name: "SQL Constraints", path: "/docs/constraints" },
    { name: "Cascading for FK", path: "/docs/cascading" }
];

// Core Querying (MOST IMPORTANT)
const querying = [
    { name: "SQL Select", path: "/docs/select" },
    { name: "Where Clause", path: "/docs/where-cl" },
    { name: "SQL Operators", path: "/docs/operators" },
    { name: "Order By Clause", path: "/docs/order-by" },
    { name: "Limit Clause", path: "/docs/limit-cl" }
];

// Functions & Grouping
const grouping = [
    { name: "Aggregate Functions", path: "/docs/aggregate" },
    { name: "Group By Clause", path: "/docs/group-by" },
    { name: "Having Clause", path: "/docs/having-cl" }
];

// Advanced Queries
const advanced = [
    { name: "Joins in SQL", path: "/docs/joins" },
    { name: "SQL Sub Queries", path: "/docs/sub-queries" },
    { name: "MySQL Views", path: "/docs/views" }
];

// Practice & Extras
const extras = [
    { name: "Practice Queries (Database)", path: "/docs/queries-DB" },
    { name: "Practice Queries (Tables)", path: "/docs/queries-tables" },
    { name: "More Practice Queries", path: "/docs/More-queries" },
    { name: "SQL Projects", path: "/docs/projects" },
    { name: "More Links", path: "/docs/links" }
];

// left column for pages list
export default function Left({ menuOpen, setMenuOpen }) {
    // use location
    const location = useLocation();

    return (
        <div className={`w-96 h-full overflow-y-auto py-4 max-lg:pb-16 border-r border-slate-800 scrollbar-transparent bg-transparent max-lg:fixed max-lg:w-full
        max-lg:top-16 max-lg:z-50 max-lg:transition-transform max-lg:duration-300 max-lg:bg-gradient-to-br max-lg:from-slate-950 max-lg:via-slate-900
        max-lg:to-slate-950 ${menuOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"}`}>
            <div className="text-slate-500 pl-4 font-semibold uppercase tracking-wider text-sm">Get started</div>
            <div className='py-3 pr-7 w-85 border-b-2 border-slate-700 min-lg:w-85 max-lg:w-full'>
                {fundamentals.map((arr, idx) => (
                    <Link to={arr.path} key={idx} onClick={() => setMenuOpen(false)}>
                        <li className={`group list-none py-2.5 px-5 my-1 font-medium text-lg rounded-r-xl cursor-pointer flex items-center justify-between transition 
                        ${location.pathname === arr.path ? "bg-emerald-400/10 text-emerald-300 border-l-4 border-emerald-400"
                                : "text-slate-300 hover:bg-slate-800/60 hover:text-slate-100"}`}>
                            {arr.name}
                            <IoIosArrowForward
                                className={`transition ${location.pathname === arr.path ? "text-emerald-400" : "text-transparent group-hover:text-slate-400"}`} />
                        </li>
                    </Link>
                ))}
            </div>

            <div className="text-slate-500 pl-4 pt-4 font-semibold uppercase tracking-wider text-sm">Database & Tables</div>
            <div className='py-3 pr-7 pb-5 w-85 border-b-2 border-slate-700 min-lg:w-85 max-lg:w-full'>
                {ddl.map((arr, idx) => (
                    <Link to={arr.path} key={idx} onClick={() => setMenuOpen(false)}>
                        <li className={`group list-none py-2.5 px-5 my-1 font-medium text-lg rounded-r-xl cursor-pointer flex items-center justify-between transition 
                        ${location.pathname === arr.path ? "bg-emerald-400/10 text-emerald-300 border-l-4 border-emerald-400"
                                : "text-slate-300 hover:bg-slate-800/60 hover:text-slate-100"}`}>
                            {arr.name}
                            <IoIosArrowForward
                                className={`transition ${location.pathname === arr.path ? "text-emerald-400" : "text-transparent group-hover:text-slate-400"}`} />
                        </li>
                    </Link>
                ))}
            </div>

            <div className="text-slate-500 pl-4 pt-4 font-semibold uppercase tracking-wider text-sm">Core Queries</div>
            <div className='py-3 pr-7 pb-5 w-85 min-lg:w-85 max-lg:w-full border-b-2 border-slate-700'>
                {querying.map((arr, idx) => (
                    <Link to={arr.path} key={idx} onClick={() => setMenuOpen(false)}>
                        <li className={`group list-none py-2.5 px-5 my-1 font-medium text-lg rounded-r-xl cursor-pointer flex items-center justify-between transition 
                        ${location.pathname === arr.path ? "bg-emerald-400/10 text-emerald-300 border-l-4 border-emerald-400"
                                : "text-slate-300 hover:bg-slate-800/60 hover:text-slate-100"}`}>
                            {arr.name}
                            <IoIosArrowForward
                                className={`transition ${location.pathname === arr.path ? "text-emerald-400" : "text-transparent group-hover:text-slate-400"}`} />
                        </li>
                    </Link>
                ))}
            </div>

            <div className="text-slate-500 pl-4 pt-4 font-semibold uppercase tracking-wider text-sm">Functions & Grouping</div>
            <div className='py-3 pr-7 pb-5 w-85 min-lg:w-85 max-lg:w-full border-b-2 border-slate-700'>
                {grouping.map((arr, idx) => (
                    <Link to={arr.path} key={idx} onClick={() => setMenuOpen(false)}>
                        <li className={`group list-none py-2.5 px-5 my-1 font-medium text-lg rounded-r-xl cursor-pointer flex items-center justify-between transition 
                        ${location.pathname === arr.path ? "bg-emerald-400/10 text-emerald-300 border-l-4 border-emerald-400"
                                : "text-slate-300 hover:bg-slate-800/60 hover:text-slate-100"}`}>
                            {arr.name}
                            <IoIosArrowForward
                                className={`transition ${location.pathname === arr.path ? "text-emerald-400" : "text-transparent group-hover:text-slate-400"}`} />
                        </li>
                    </Link>
                ))}
            </div>

            <div className="text-slate-500 pl-4 pt-4 font-semibold uppercase tracking-wider text-sm">Advanced SQL</div>
            <div className='py-3 pr-7 pb-5 w-85 min-lg:w-85 max-lg:w-full border-b-2 border-slate-700'>
                {advanced.map((arr, idx) => (
                    <Link to={arr.path} key={idx} onClick={() => setMenuOpen(false)}>
                        <li className={`group list-none py-2.5 px-5 my-1 font-medium text-lg rounded-r-xl cursor-pointer flex items-center justify-between transition 
                        ${location.pathname === arr.path ? "bg-emerald-400/10 text-emerald-300 border-l-4 border-emerald-400"
                                : "text-slate-300 hover:bg-slate-800/60 hover:text-slate-100"}`}>
                            {arr.name}
                            <IoIosArrowForward
                                className={`transition ${location.pathname === arr.path ? "text-emerald-400" : "text-transparent group-hover:text-slate-400"}`} />
                        </li>
                    </Link>
                ))}
            </div>

            <div className="text-slate-500 pl-4 pt-4 font-semibold uppercase tracking-wider text-sm">Practice & Resources</div>
            <div className='py-3 pr-7 pb-5 w-85 min-lg:w-85 max-lg:w-full'>
                {extras.map((arr, idx) => (
                    <Link to={arr.path} key={idx} onClick={() => setMenuOpen(false)}>
                        <li className={`group list-none py-2.5 px-5 my-1 font-medium text-lg rounded-r-xl cursor-pointer flex items-center justify-between transition 
                        ${location.pathname === arr.path ? "bg-emerald-400/10 text-emerald-300 border-l-4 border-emerald-400"
                                : "text-slate-300 hover:bg-slate-800/60 hover:text-slate-100"}`}>
                            {arr.name}
                            <IoIosArrowForward
                                className={`transition ${location.pathname === arr.path ? "text-emerald-400" : "text-transparent group-hover:text-slate-400"}`} />
                        </li>
                    </Link>
                ))}
            </div>
        </div>
    );
}