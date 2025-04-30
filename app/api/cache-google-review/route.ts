import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// This is a route handler for caching Google Reviews
// It fetches the reviews from the Google Places API and saves them to a local JSON file
// Call this route to update the cache, e.g., via a cron job or manually: https://el-websolutions.com/api/cache-google-review

export async function GET() {
    const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    const GOOGLE_PLACE_ID = "ChIJ-2p_GgTEJ0wRHuJzuHFLjw0";

    const url = `https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}?fields=rating,userRatingCount&key=${GOOGLE_API_KEY}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        const cachePath = path.join(process.cwd(), "public", "google-review-cache.json");
        fs.writeFileSync(cachePath, JSON.stringify({
            rating: data.rating,
            reviewCount: data.userRatingCount,
            updatedAt: new Date().toISOString()
        }, null, 2));

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Failed to fetch Google Reviews:", error);
        return NextResponse.json({ success: false, error });
    }
}
