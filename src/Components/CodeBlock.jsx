// code block component
export default function CodeBlock({ children }) {
    return (
        <div className="bg-slate-900 text-emerald-300 font-mono px-5 py-3 rounded-lg
        border border-slate-700 mt-4 min-xl:w-[800px] w-full overflow-x-auto">
            <pre className="whitespace-pre">
                {children}
            </pre>
        </div>
    );
}