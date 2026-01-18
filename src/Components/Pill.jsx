// pill component
export default function Pill({ text }) {
    return (
        <span className="px-5 py-2 rounded-full border border-slate-700 bg-slate-900 text-slate-300 text-sm">
            {text}
        </span>
    );
}