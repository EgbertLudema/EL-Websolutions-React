import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-20 shadow-md">
            <div className="container">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-center mb-6">Ready to get started?</h2>
                    <p className="text-center text-lg mb-8 text-gray-700 dark:text-gray-400">
                        I’m currently accepting new projects and would love to hear about yours. Please take a few minutes to tell me about it.
                    </p>
                    <Link href="/contact">
                        <button className="py-3 px-8 rounded-lg noisy_button hover:scale-105 transition">Get in touch</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}