"use client";

import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight, FaSearchPlus } from "react-icons/fa";
import Image from "next/image";

type LightboxProps = {
    images: { src: string; alt?: string }[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
};

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") onNext();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onNext, onPrev, onClose]);

    const image = images[currentIndex];

    return (
        <div className="fixed inset-0 z-[1000] bg-black bg-opacity-90 flex flex-col items-center justify-center p-4">
            {/* Close button */}
            <button onClick={onClose} className="absolute top-6 right-6 text-white text-3xl">
                <IoClose />
            </button>

            {/* Image */}
            <div className="relative max-w-full max-h-full flex items-center justify-center overflow-hidden">
                <Image
                    src={image.src}
                    alt={image.alt || ""}
                    width={1200}
                    height={800}
                    className="object-contain max-w-full max-h-[80vh] cursor-zoom-in"
                />
            </div>

            {/* Navigation */}
            {images.length > 1 && (
                <>
                    {currentIndex > 0 && (
                        <button onClick={onPrev} className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl">
                            <FaChevronLeft />
                        </button>
                    )}
                    {currentIndex < images.length - 1 && (
                        <button onClick={onNext} className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl">
                            <FaChevronRight />
                        </button>
                    )}
                </>
            )}
        </div>
    );
}