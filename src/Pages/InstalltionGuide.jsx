// import navbar and footer
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// MySQL Installation Guide page
export default function MySQLInstallation() {
    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
                <div className="max-w-7xl mx-auto px-6 py-20">

                    {/* PAGE HEADER */}
                    <div className="pt-16 pb-10 border-b border-slate-800">
                        <span className="inline-block text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full mb-4">
                            Setup Guide
                        </span>

                        <h1 className="font-bold tracking-tight text-slate-100
                        text-4xl md:text-5xl xl:text-6xl">
                            MySQL Installation Guide
                        </h1>

                        <p className="text-slate-300 mt-4 max-w-3xl">
                            Step-by-step guide to install
                            <span className="text-emerald-400"> MySQL Community Server</span> and
                            <span className="text-emerald-400"> MySQL Workbench</span> on
                            Windows and macOS — beginner friendly and error-free.
                        </p>
                    </div>

                    {/* WINDOWS */}
                    <section className="mt-16">
                        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 shadow-xl">
                            <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mb-6">
                                MySQL Installation on Windows
                            </h2>

                            <ol className="list-decimal list-inside space-y-3 text-slate-300 max-w-4xl">
                                <li>Visit <span className="text-emerald-400">https://www.mysql.com</span></li>
                                <li>Go to <b>Downloads</b></li>
                                <li>Select <b>MySQL Community (GPL) Downloads</b></li>
                                <li>Click <b>MySQL Installer for Windows</b></li>
                                <li>Download the recommended installer</li>
                                <li>Skip login → <b>No thanks, just start my download</b></li>
                                <li>Run the installer after download</li>
                                <li>Select <b>Full</b> setup → Next</li>
                                <li>Click <b>Execute</b> to install dependencies</li>
                                <li>Continue until configuration starts</li>
                                <li>Create a strong <b>root password</b></li>
                                <li>Finish setup and connect server</li>
                                <li>Open <b>MySQL Workbench</b></li>
                            </ol>

                            <div className="mt-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-slate-300">
                                <span className="text-emerald-400 font-semibold">Important:</span>
                                {" "}Save your root password securely — it’s required for every connection.
                            </div>
                        </div>
                    </section>

                    {/* MACOS */}
                    <section className="mt-16">
                        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 shadow-xl">
                            <h2 className="text-2xl md:text-3xl font-semibold text-emerald-400 mb-6">
                                MySQL Installation on macOS
                            </h2>

                            <ol className="list-decimal list-inside space-y-3 text-slate-300 max-w-4xl">
                                <li>Visit <span className="text-emerald-400">https://www.mysql.com</span></li>
                                <li>Downloads → <b>MySQL Community (GPL)</b></li>
                                <li>Select <b>MySQL Community Server</b></li>
                                <li>Download the DMG file</li>
                                <li>
                                    Choose your chip:
                                    <ul className="list-disc list-inside ml-6 mt-2 text-slate-400">
                                        <li>ARM64 → Apple Silicon (M1 / M2 / M3)</li>
                                        <li>x86 → Intel Macs</li>
                                    </ul>
                                </li>
                                <li>Run installer and follow steps</li>
                                <li>Create and save root password</li>
                                <li>Allow MySQL as a system service</li>
                                <li>Install <b>MySQL Workbench</b></li>
                                <li>Connect to <b>Local Instance</b></li>
                            </ol>

                            <div className="mt-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-slate-300">
                                <span className="text-emerald-400 font-semibold">Tip:</span>
                                {" "}Manage MySQL via <b>System Settings → MySQL</b>.
                            </div>
                        </div>
                    </section>

                    {/* VERIFY */}
                    <section className="mt-16">
                        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-w-3xl">
                            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/60 border-b border-slate-700">
                                <span className="w-3 h-3 rounded-full bg-red-500" />
                                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                                <span className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-4 text-xs text-slate-400">verify.sql</span>
                            </div>

                            <pre className="p-6 text-sm text-slate-200 overflow-x-auto">
                                <code>
                                    <span className="text-pink-400">SELECT</span>{" "}
                                    <span className="text-slate-200">VERSION()</span>;
                                </code>
                            </pre>
                        </div>

                        <p className="mt-4 text-xs text-slate-500">
                            If this runs successfully, MySQL is installed correctly.
                        </p>
                    </section>

                </div>

                {/* Footer */}
                <Footer />
            </section>
        </>
    );
}