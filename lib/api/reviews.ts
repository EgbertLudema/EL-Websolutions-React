import type { NextApiRequest, NextApiResponse } from "next";
import { GOOGLE_API_KEY, GOOGLE_PLACE_ID } from "../../config";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (!data.result || !data.result.reviews) {
            return res.status(404).json({ message: "No reviews found" });
        }

        res.status(200).json(data.result.reviews);
    } catch (error) {
        console.error("Error fetching Google Reviews:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}