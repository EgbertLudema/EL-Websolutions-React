"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaUser } from "react-icons/fa";

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
                console.error("Fout bij het ophalen van Google Places data:", error);
            }
        }

        fetchGoogleData();
    }, []);

    function renderStars(rating: number, className: string = "text-primary fill-primary") {
        return (
            <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                        key={i}
                        size={16}
                        className={`${i < rating ? className : "text-muted-foreground"}`}
                    />
                ))}
            </div>
        );
    }

    return (
        <section className="py-20 shadow-md bg-slate-100 dark:bg-slate-900 border-b border-slate-300 dark:border-slate-700">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium">Testimonials</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Klantbeoordelingen</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Geloof niet alleen mijn woord — ontdek wat klanten zeggen over onze samenwerking.
                    </p>
                </div>

                {errorMessage ? (
                    <p className="text-center text-red-500">{errorMessage}</p>
                ) : googleData ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                            {/* Google beoordeling */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="p-6 primary-gradient text-white rounded-xl shadow-md text-center flex flex-col justify-center items-center"
                            >
                                <h3 className="text-lg font-semibold">{googleData.displayName.text}</h3>
                                <p className="flex justify-center mt-2">
                                    {renderStars(googleData.rating, "text-white fill-white")}
                                </p>
                                <p className="mt-2 text-sm">
                                    ({googleData.userRatingCount} beoordelingen)
                                </p>
                                <a
                                    href={googleData.googleMapsUri}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-800 rounded-md shadow hover:scale-[102%] hover:-translate-y-1 hover:shadow-md transition"
                                >
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-3 0 262 262" preserveAspectRatio="xMidYMid">
                                        <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/>
                                        <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/>
                                        <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/>
                                        <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
                                    </svg>
                                    Laat een review achter
                                </a>
                            </motion.div>

                            {/* Klantreviews */}
                            {googleData.reviews?.map((review: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col justify-start h-full bg-white p-6 rounded-xl shadow-md dark:bg-slate-800"
                                >
                                    <div className="flex items-center mb-4">
                                        {review.authorAttribution.photoUri ? (
                                            <img
                                                src={review.authorAttribution.photoUri}
                                                alt={review.authorAttribution.displayName}
                                                className="w-12 h-12 object-cover mr-4 rounded-full"
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
                                                    className="text-primary hover:text-primary/70 transition"
                                                >
                                                    {review.authorAttribution.displayName}
                                                </a>
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {new Date(review.publishTime).toLocaleDateString("nl-NL", {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-lg text-yellow-500">{renderStars(review.rating)}</p>
                                    <p className="text-foreground italic mt-2">{review.originalText?.text}</p>

                                    <a
                                        className="self-end mt-auto inline-flex items-center gap-2 text-gray-700 dark:text-gray-200 dark:hover:text-white hover:text-gray-900 transition"
                                        href={googleData.googleMapsUri}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="-3 0 262 262" preserveAspectRatio="xMidYMid">
                                            <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/>
                                            <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/>
                                            <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/>
                                            <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
                                        </svg>
                                        bekijk review
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </>
                ) : (
                    <p className="text-center text-gray-500">Beoordelingen laden...</p>
                )}
            </div>
        </section>
    );
}
