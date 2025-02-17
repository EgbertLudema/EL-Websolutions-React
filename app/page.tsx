import Link from "next/link";

export default function HomePage() {
    return (
        <main>
            <div className="container relative flex flex-col justify-center items-center py-8 min-h-screen">
                <p className="sub-title mb-6 backdrop-blur-md">Available for Freelance projects</p>
                <h1 className="bg-clip-text bg-gradient-primary mb-6">Crafting digital experiences</h1>
                <p className="text-lg mb-8 text-gray-700 dark:text-gray-400">Full-stack developer specializing in creating beautiful, functional, and user-centered digital experiences</p>
                <div className="flex justify-center gap-4">
                    <Link href="/contact">
                        <button className="py-3 px-8 rounded-lg noisy_button">Get in touch</button>
                    </Link>
                    <Link href="/project">
                        <button className="py-3 px-8 backdrop-blur-md">View projects</button>
                    </Link>
                </div>
                <div>

                </div>
                <svg className="animate-bounce mt-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" >
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                </svg>
            </div>
        </main>
    );
}