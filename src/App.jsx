// Mainpage
export default function MainPage() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen pt-14 flex flex-row">
        <Left />
        <Right />
      </div>
    </>
  )
}

// navbar
function Navbar() {
  return (
    <div className="w-full fixed p-3
    bg-slate-900">
      <div className="text-2xl font-semibold
      text-white">LearnSQL</div>
    </div>
  )
}

// list of pages
const array = [
  { name: "SQL Introduction" },
  { name: "SQL Introduction" },
  { name: "SQL Introduction" },
  { name: "SQL Introduction" },
  { name: "SQL Introduction" },
  { name: "SQL Introduction" },
  { name: "SQL Introduction" },
  { name: "SQL Introduction" },
  { name: "SQL Introduction" }
]

// left column for pages list
function Left() {
  return (
    <div className="w-96 h-full py-3 px-5
      border-r-white border-r-2 bg-slate-900">
      <div className='pt-10 w-80'>
        {array.map((arr, idx) => (
          <li className='list-none py-2 px-4 text-xl rounded-md cursor-pointer
          hover:bg-slate-800 text-white' key={idx}>{arr.name}</li>
        ))}
      </div>
    </div>
  )
}

// right column for pages
function Right() {
  return (
    <div className="w-full p-3 px-5
    bg-slate-900">
      <div className="h-full">
        <h1 className="text-8xl font-semibold text-white">SQL</h1>
      </div>
    </div>
  )
}