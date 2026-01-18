// note box component
export default function NoteBox({ children }) {
    return (
        <div className="bg-emerald-400/5 border-l-4 border-emerald-400 px-5 py-4 rounded-r-lg mt-6 min-a:text-2xl max-a:text-xl">
            <p>
                <span className="font-semibold text-emerald-400">Note:</span>{" "}
                {children}
            </p>
        </div>
    );
}