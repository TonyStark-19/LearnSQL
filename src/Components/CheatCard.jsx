// import usestate
import { useState } from "react";

// react icons
import { MdContentCopy } from "react-icons/md";

/* CHEAT CARD COMPONENT */
export default function CheatCard({ title, desc, code }) {
    // copy state
    const [copied, setCopied] = useState(false);

    // copy to clipboard function
    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">

            {/* HEADER */}
            <div className="px-5 py-4 border-b border-slate-800 flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-lg font-semibold text-emerald-400">{title}</h3>
                    <p className="text-sm text-slate-400 mt-1">{desc}</p>
                </div>

                {/* COPY BUTTON */}
                <button
                    onClick={copyToClipboard}
                    className="text-xs px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white
                    transition whitespace-nowrap cursor-pointer"
                >
                    {copied ? "Copied!" : <MdContentCopy className="text-[16px]" />}
                </button>
            </div>

            {/* CODE */}
            <pre className="p-5 text-sm text-slate-200 overflow-x-auto">
                <code>{code}</code>
            </pre>
        </div>
    );
}