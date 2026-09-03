import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "EL-Websolutions — Freelance developer voor websites, Shopify en doorontwikkeling";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "80px",
                    backgroundColor: "#0b1120",
                    backgroundImage:
                        "radial-gradient(circle at 15% 15%, rgba(155,135,245,0.35), transparent 55%), radial-gradient(circle at 85% 85%, rgba(14,165,233,0.3), transparent 55%)",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                        style={{
                            display: "flex",
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            backgroundColor: "#10b981",
                        }}
                    />
                    <span style={{ color: "#94a3b8", fontSize: 28, fontWeight: 500 }}>
                        el-websolutions.com
                    </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <div
                        style={{
                            display: "flex",
                            fontSize: 64,
                            fontWeight: 700,
                            lineHeight: 1.15,
                            color: "#ffffff",
                            maxWidth: 980,
                        }}
                    >
                        Freelance developer voor websites, Shopify en doorontwikkeling
                    </div>
                    <div style={{ display: "flex", fontSize: 30, color: "#cbd5e1", maxWidth: 820 }}>
                        Maatwerk websites, Shopify development en betrouwbare technische ondersteuning.
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        fontSize: 34,
                        fontWeight: 700,
                        backgroundImage: "linear-gradient(135deg, #9b87f5, #0ea5e9)",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    EL-Websolutions
                </div>
            </div>
        ),
        { ...size }
    );
}
