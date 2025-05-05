"use client";

import CookieConsent, { Cookies } from "react-cookie-consent";
import Script from "next/script";
import { useEffect, useState } from "react";

const GA_MEASUREMENT_ID = "G-CDT2T9C04L";

export default function CookieBanner() {
    const [gaAllowed, setGaAllowed] = useState(false);

    useEffect(() => {
        const choice = Cookies.get("CookieConsent");
        if (choice === "true") {
            setGaAllowed(true);
        }
    }, []);

    return (
        <>
            {gaAllowed && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                        strategy="afterInteractive"
                    />
                    <Script id="ga-init" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
                        `}
                    </Script>
                </>
            )}

            <CookieConsent
                location="bottom"
                enableDeclineButton
                cookieName="CookieConsent"
                buttonText="Akkoord"
                declineButtonText="Alleen functionele cookies"
                onAccept={() => setGaAllowed(true)}
                onDecline={() => setGaAllowed(false)}
                style={{
                    background: "#0f172a",
                    color: "#f8fafc",
                    fontSize: "14px",
                    padding: "16px",
                    zIndex: 9999,
                }}
                buttonStyle={{
                    background: "#38bdf8",
                    color: "#0f172a",
                    fontWeight: "bold",
                    fontSize: "14px",
                    borderRadius: "6px",
                    padding: "8px 16px",
                    marginLeft: "10px",
                }}
                declineButtonStyle={{
                    background: "#475569",
                    color: "#f8fafc",
                    fontSize: "14px",
                    borderRadius: "6px",
                    padding: "8px 16px",
                }}
            >
                Deze website gebruikt cookies voor statistieken (Google Analytics) en beveiliging (reCAPTCHA).
            </CookieConsent>
        </>
    );
}
