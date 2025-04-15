'use client';

import { useState } from "react";
import { FaShare } from "react-icons/fa";

export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 text-sm px-4 py-2 border border-slate-300 dark:border-slate-600 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition"
    >
      <FaShare className="w-4 h-4" />
      {copied ? "Link gekopiëerd!" : "Delen"}
    </button>
  );
}
