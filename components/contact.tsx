import { FaEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


export default function Contact(){
    return(
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                <span className="text-primary font-medium">Contact</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Get in Touch</h2>
                </div>
                <div className="max-w-4xl mx-auto bg-background rounded-2xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="p-8 bg-gradient-primary text-white">
                        <h3 className="text-3xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                            <FaEnvelope className="w-6 h-6" />
                            <span>info@el-websolutions.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                            <FaLocationDot className="w-6 h-6" />
                            <span>Friesland, NL</span>
                            </div>
                        </div>
                    </div>
                    <form className="p-8">
                    <div className="space-y-6">
                        <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-border bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-border bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            Message
                        </label>
                        <textarea
                            rows={4}
                            className="w-full px-4 py-2 border border-border bg-background rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        </div>
                        <button
                        type="submit"
                        className="w-full px-8 py-3 gradient-btn"
                        >
                        Send Message
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </section>
    )
}