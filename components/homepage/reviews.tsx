"use client";

import { useEffect, useState } from "react";

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch("/api/reviews");
                if (!response.ok) throw new Error("Failed to fetch reviews");

                const data = await response.json();
                setReviews(data || []);
            } catch (error) {
                console.error("Error fetching reviews:", error);
                setError("Failed to load reviews.");
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    return (
        <section className="py-20 shadow-md">
            <div className="container">
                <p className="text-center sub-title mb-6">Testimonials</p>
                <h2 className="text-center mb-6">Client reviews</h2>
                <p className="text-center text-lg mb-8 text-gray-700 dark:text-gray-400">
                    Don't just take my word for it. Here's what my clients have to say about their experiences working with me.
                </p>

                {loading && <p className="text-center text-gray-500">Loading reviews...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="p-6 border rounded-lg shadow">
                            <p className="font-semibold">{review.authorAttribution.displayName}</p>
                            <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
                            <p className="text-gray-600">{review.text}</p>
                            <p className="text-sm text-gray-500">{new Date(review.publishTime).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}