"use client";

import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

type LightboxProps = {
    images: { src: string; alt?: string }[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
};

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") onNext();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onNext, onPrev, onClose]);

    const handleImageClick = () => {
        setScale((prev) => (prev === 1 ? 2.5 : 1)); // Toggle between 1x and 2.5x
    };

    const image = images[currentIndex];

    return (
        <div className="fixed inset-0 z-[1000] bg-black bg-opacity-90 flex flex-col items-center justify-center p-4">
            {/* Close button */}
            <button onClick={onClose} className="absolute top-6 right-6 z-50 text-white text-3xl hover:scale-110 transition-transform">
                <IoClose />
            </button>

            {/* Image with Click Zoom */}
            <div
                className="relative overflow-hidden flex items-center justify-center w-full h-full"
            >
                <div
                    onClick={handleImageClick}
                    className={`transition-transform ${scale === 1 ? "cursor-zoom-in" : "cursor-zoom-out"}`}
                    style={{
                        transform: `scale(${scale})`,
                        transition: "transform 0.3s",
                    }}
                >
                    <Image
                        src={image.src}
                        alt={image.alt || ""}
                        width={1200}
                        height={800}
                        className="object-contain max-w-full max-h-[80vh]"
                    />
                </div>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
                    {currentIndex > 0 && (
                        <button onClick={onPrev} className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:scale-110 transition-transform">
                            <FaChevronLeft />
                        </button>
                    )}
                    {currentIndex < images.length - 1 && (
                        <button onClick={onNext} className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:scale-110 transition-transform">
                            <FaChevronRight />
                        </button>
                    )}
                </>
            )}
        </div>
    );
}
