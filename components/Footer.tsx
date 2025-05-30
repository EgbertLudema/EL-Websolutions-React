import { FaLocationDot } from "react-icons/fa6";
import EmailLink from "./ui/emailLink";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-100 dark:bg-slate-900">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-20 pt-12 pb-8 px-2 md:px-0">
                    <div className="flex flex-col justify-items-start space-y-4">
                        <h3 className="text-slate-800 dark:text-slate-200">Over mij:</h3>
                        <p className="text-slate-700 dark:text-slate-400">
                            Hoi, ik ben Egbert Ludema, een webdeveloper uit Nederland. Ik bouw websites en webapplicaties met de focus op performance en gebruiksvriendelijkheid.
                        </p>

                        {/* Social Links */}
                        <ul className="flex space-x-4">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/egbert-ludema/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="LinkedIn profiel van Egbert Ludema"
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="primary-color"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/el_websolutions/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="Instagram profiel van EL Websolutions"
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="primary-color"  
                                    >
                                        <g>
                                            <path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z"/>
                                            <path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z"/>
                                            <circle cx="18.406" cy="5.594" r="1.44"/>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/EgbertLudema"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="Github pagina van Egbert Ludema"
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 98 96" 
                                        fill="currentColor"
                                        className="primary-color"
                                    >
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-items-start space-y-4">
                        <h3 className="text-slate-800 dark:text-slate-200">Links</h3>
                        <nav className="text-slate-700 dark:text-slate-400">
                            <ul className="flex flex-col space-y-1">
                                <li><Link className="hover:text-primary transition-colors" href="/">Home</Link></li>
                                <li><Link className="hover:text-primary transition-colors" href="/diensten">Diensten</Link></li>
                                <li><Link className="hover:text-primary transition-colors" href="/projecten">Projecten</Link></li>
                                <li><Link className="hover:text-primary transition-colors" href="/blogs">Blogs</Link></li>
                                <li><Link className="hover:text-primary transition-colors" href="/over-mij">Over mij</Link></li>
                                <li><Link className="hover:text-primary transition-colors" href="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex flex-col justify-items-start space-y-4">
                        <h3 className="text-slate-800 dark:text-slate-200">Contact</h3>
                        <div className="flex flex-col space-y-2">
                            <EmailLink color="primary" />
                            <div className="flex items-center space-x-2 text-primary fill-primary">
                                <FaLocationDot className="w-4 h-4 fill-current" />
                                <span className="text-sm">Friesland, NL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container flex flex-row justify-between items-center border-t border-slate-200 dark:border-slate-500 py-4">
                <div className="text-slate-500 dark:text-slate-400">
                    <p>© {currentYear} - EL Websolutions</p>
                </div>
                <div className="text-slate-500 dark:text-slate-400">
                    <ul className="flex flex-row gap-4 justify-end">
                        <li><Link className="hover:text-primary transition-colors" href="/sitemap">Sitemap</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
