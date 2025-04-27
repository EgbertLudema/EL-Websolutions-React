"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";

type GalleryImage = {
    src: string;
    alt?: string;
    caption?: string;
};

export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const nextImage = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex + 1) % images.length);
        }
    };
    const prevImage = () => {
        if (lightboxIndex !== null) {
            setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative aspect-video overflow-hidden rounded-md shadow-md cursor-pointer"
                        onClick={() => openLightbox(index)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt ?? "Project image"}
                            width={800}
                            height={450}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        />
                        {image.caption && (
                            <p className="text-center text-sm text-neutral-500 mt-2">{image.caption}</p>
                        )}
                    </div>
                ))}
            </div>

            {lightboxIndex !== null && (
                <Lightbox
                    images={images}
                    currentIndex={lightboxIndex}
                    onClose={closeLightbox}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            )}
        </>
    );
}
