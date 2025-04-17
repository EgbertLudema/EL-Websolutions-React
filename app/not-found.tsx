import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 - Niet gevonden - EL-Websolutions",
    description: "Benieuwd naar wat ik allemaal al heb opgeleverd? Bekijk hier mijn projecten.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold mb-4 leading-snug">404 – Pagina niet gevonden</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
        Oeps! De pagina die je zoekt bestaat niet of is verplaatst.
      </p>
      <Link
        href="/"
        className="gradient-btn px-6 py-3 transition"
      >
        Terug naar de homepage
      </Link>
    </div>
  )
}
