import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const formData = await req.formData();
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const message = formData.get("message")?.toString();
    const token = formData.get("token")?.toString();

    if (!name || !email || !message || !token) {
        return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
    }

    // Verify reCAPTCHA
    const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });
    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
        return NextResponse.json({ success: false, message: "reCAPTCHA failed" }, { status: 401 });
    }

    try {
        const data = await resend.emails.send({
            from: "Contactformulier <onboarding@resend.dev>",
            to: ["egbertludema2001@gmail.com"],
            subject: "Nieuw bericht via contactformulier",
            text: `Naam: ${name}\nE-mail: ${email}\n\nBericht:\n${message}`,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Mail error:", error);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}
