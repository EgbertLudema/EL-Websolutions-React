import fs from "fs";
import path from "path";

const servicesDirectory = path.join(process.cwd(), "app/diensten");

export async function getAllServices() {
    const files = fs.readdirSync(servicesDirectory);

    const services = files
        .filter((fileName) => {
            const fullPath = path.join(servicesDirectory, fileName);
            return fs.statSync(fullPath).isDirectory();
        })
        .map((directoryName) => ({
            slug: directoryName
        }));

    return services;
}
