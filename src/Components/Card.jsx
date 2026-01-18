// card component
export default function Card({ title, desc }) {
    return (
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-slate-700 transition">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}