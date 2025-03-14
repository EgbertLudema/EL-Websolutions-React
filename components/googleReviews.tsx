"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalf, FaUser } from "react-icons/fa";

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const GOOGLE_PLACE_ID = "ChIJ-2p_GgTEJ0wRHuJzuHFLjw0";

export default function GoogleReviews() {
    const [googleData, setGoogleData] = useState<any>(null);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        async function fetchGoogleData() {
            try {
                const response = await fetch(
                    `https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}?fields=id,displayName,rating,userRatingCount,reviews,googleMapsUri,websiteUri&key=${GOOGLE_API_KEY}`
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setGoogleData(data);
                console.log("Google Data:", data);
            } catch (error: any) {
                setErrorMessage(error.message);
                console.error("Failed to fetch Google Places data:", error);
            }
        }

        fetchGoogleData();
    }, []);

    function renderStars(rating: number) {
        return (
            <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                        key={i}
                        size={16}
                        className={`${
                            i < rating ? "text-primary fill-primary" : "text-muted-foreground"
                        }`}
                    />
                ))}
            </div>
        );
    }

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium">Testimonials</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Client Reviews</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Don't just take my word for it. Here's what my clients have to say about their experiences working with me.
                    </p>
                </div>

                {errorMessage ? (
                    <p className="text-center text-red-500">{errorMessage}</p>
                ) : googleData ? (
                    <>
                        {/* Main Google Rating */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="p-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl shadow-md text-center mx-auto max-w-lg"
                        >
                            <h3 className="text-lg font-semibold">{googleData.displayName.text}</h3>
                            <p className="flex justify-center mt-2">{renderStars(googleData.rating)}</p>
                            <p className="mt-2 text-sm">
                                ({googleData.userRatingCount} reviews)
                            </p>
                            <a
                                href={googleData.googleMapsUri}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-800 rounded-md shadow hover:bg-gray-200 transition"
                            >
                                <img src="/images/icons/google_icon.webp" alt="Google icon" className="w-5 h-5" />
                                Laat een review achter
                            </a>
                        </motion.div>

                        {/* Client Reviews */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                            {googleData.reviews?.map((review: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-muted p-6 rounded-xl shadow-md"
                                >
                                    <div className="flex items-center mb-4">
                                        {review.authorAttribution.photoUri ? (
                                            <img
                                                src={review.authorAttribution.photoUri}
                                                alt={review.authorAttribution.displayName}
                                                className="w-12 h-12 rounded-full object-cover mr-4"
                                            />
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                                                <FaUser className="w-6 h-6 text-primary" />
                                            </div>
                                        )}
                                        <div>
                                            <h3 className="font-semibold">
                                                <a
                                                    href={review.authorAttribution.uri}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    {review.authorAttribution.displayName}
                                                </a>
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {new Date(review.publishTime).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-lg text-yellow-500">{renderStars(review.rating)}</p>
                                    <p className="text-foreground italic mt-2">{review.originalText?.text}</p>

                                    <a
                                        className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition"
                                        href={googleData.googleMapsUri}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src="/images/icons/google_icon.webp" alt="Google icon" className="w-5 h-5" />
                                        Bekijken op Google
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </>
                ) : (
                    <p className="text-center text-gray-500">Loading reviews...</p>
                )}
            </div>
        </section>
    );
}