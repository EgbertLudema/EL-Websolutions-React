// Laatste bericht mee doorgaan voor debugging google reviews: https://chatgpt.com/g/g-p-679b968382d4819191212c4ec50e2c11-react-portfolio/c/67d33663-3160-800e-b11b-6de2a7af06de

import { NextResponse } from "next/server";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;

export async function GET() {
    try {
        const url = `https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}?fields=id,displayName,rating,userRatingCount,reviews,googleMapsUri,websiteUri&key=${GOOGLE_API_KEY}`;

        console.log("Fetching Google Reviews from:", url);

        const response = await fetch(url, {
            headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Google API Error:", errorText);
            return NextResponse.json({ message: "Error fetching reviews", error: errorText }, { status: response.status });
        }

        const data = await response.json();

        if (!data.reviews || !Array.isArray(data.reviews)) {
            console.warn("No reviews found in response");
            return NextResponse.json({ message: "No reviews found" }, { status: 404 });
        }

        return NextResponse.json(data.reviews, { status: 200 });
    } catch (error) {
        console.error("Internal Server Error:", error);
        return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
    }
}