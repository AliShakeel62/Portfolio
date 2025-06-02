import { useTheme } from "../context/ThemeProvider";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
    const { theme } = useTheme();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.endsWith("@gmail.com")) {
            setError("Only @gmail.com emails are accepted.");
        } else {
            setError("");
            // ✅ Submit form logic here
            alert("Message Sent!");
        }
    };

    return (
        <main className={`w-full max-h-full p-2 md:p-12 ${theme === "dark" ? "bg-[#001800] text-white" : "bg-white text-green-900"}`}>
            {/* Main Heading */}
            <h1 className="h-25 lg:h-20 text-3xl md:text-4xl font-bold text-left mb-2 leading-tight">
                <span className="block">Let’s Build Something</span>
                <span className="block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                    Amazing Together!
                </span>
            </h1>

            {/* Grid Section: Form + Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Info */}
                <section className="space-y-3">
                    <p className="text-lg">
                      I'm always open to meaningful conversations whether it's about a new project creative collaboration or simply sharing your vision Feel free to reach out anytime  
                    </p>

                    {/* Email Card */}
                    <div className="flex items-center gap-4 bg-green-100 p-3 rounded-lg shadow">
                        <div className="bg-green-600 text-white p-2 rounded-full">
                            <FaEnvelope size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-green-800">MAIL ME</p>
                            <p className="text-green-800">alishakeel567567@gmail.com</p>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="flex items-center gap-4 bg-green-100 p-3 rounded-lg shadow">
                        <div className="bg-green-600 text-white p-3 rounded-full">
                            <FaPhoneAlt size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-green-800">CALL ME</p>
                            <p className="text-green-800">+92 3152898148</p>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 pt-3">
                        <a href="https://www.facebook.com/ali.shakeel.336717" className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition"><FaFacebook /></a>
                        <a href="https://www.linkedin.com/in/alishakeel62/" className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/alishakeel829/" className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition"><FaInstagram /></a>
                    </div>
                </section>

                {/* Right Form */}
                <section>
                    <form className="space-y-2" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-md font-medium">Name:</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-md font-medium">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={`w-full p-2 border ${error ? "border-red-500" : "border-gray-300"} rounded focus:outline-none focus:ring-2 focus:ring-green-500`}
                            />
                            {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-md font-medium">Message:</label>
                            <textarea
                                id="message"
                                rows={4}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                            Send Message
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}
