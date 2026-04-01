import services from "@/data/services";

export async function getAllServices() {
    return services.map((service) => ({
        slug: service.link.replace("/diensten/", "")
    }));
}
