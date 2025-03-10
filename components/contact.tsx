export default function Contact(){
    return(
        <section className="py-8 shadow-md contact">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-lg bg-neutral-50 dark:bg-neutral-900 shadow-md overflow-clip">
                    <div className="flex flex-col gradient-bg p-8">
                        <h2 className="text-white mb-6">Get in touch</h2>
                        {/* Contact icons & email */}
                    </div>
                    <div className="p-8">
                        <form action="" method="POST">
                            <div className="grid grid-cols-1 gap-6">
                                <input type="text" name="name" placeholder="Your Name" className="input" required />
                                <input type="email" name="email" placeholder="Your Email" className="input" required />
                                <textarea name="message" placeholder="Your Message" rows={6} className="input" required />
                                <button type="submit" className="py-3 px-6 gradient-btn">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}