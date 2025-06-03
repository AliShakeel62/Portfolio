import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Adobe from "../assets/Adobe Express - file.png";
import Whatsapp from "../assets/WhatsApp_Image_2025-06-02_at_6.22.43_PM-removebg-preview.png"

export default function About() {
    const [showElements, setShowElements] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const timer = setTimeout(() => setShowElements(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const skills = [
        { name: "Next.JS", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
        { name: "Express.JS", logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
        { name: "HTML", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
        { name: "CSS", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
        { name: "Tailwind", logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
        { name: "Github", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
        { name: "React.js", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
        { name: "JavaScript", logo: "https://www.svgrepo.com/show/303206/javascript-logo.svg" },
        { name: "Bootstrap", logo: "https://www.svgrepo.com/show/353498/bootstrap.svg" },
        { name: "Vercel", logo: "https://www.svgrepo.com/show/354512/vercel.svg" },
        { name: "MUI", logo: "https://www.svgrepo.com/show/306383/material-ui.svg" }
    ];

    const duplicatedSkills = [...skills, ...skills];

    return (
        <main className={`flex  justify-center align-center flex-col  h-full w-100 md:w-191  lg:w-255 ${theme === "dark" ? "bg-[#001800]" : "bg-white"}`}>
            <section className=" flex-col items-center justify-center flex-grow p-4 text-center sm:text-center">
                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl">
                    {/* Left Column (Profile Pic + Icons) */}
                    <div
                        className={`flex flex-col items-center transition-all duration-700 ease-out ${showElements ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
                    >
                        {/* Profile Image */}
                        <div
                            className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 mb-4 ${theme === "dark" ? "border-white" : "border-green-800"}`}
                        >
                            <img
                                src={Adobe}
                                alt="Ali Shakeel"
                                className="w-full h-full object-cover "
                            />
                        </div>

                        {/* Icons */}
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/AliShakeel62"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-2xl transition-transform hover:scale-110 ${theme === "dark" ? "text-white hover:text-green-600" : "text-green-800 hover:text-black"}`}
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/alishakeel62/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-2xl transition-transform hover:scale-110 ${theme === "dark" ? "text-white hover:text-green-600" : "text-green-800 hover:text-black"}`}
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Right Column (About Text) */}
                    <div
                        className={`max-w-2xl w-full transition-all duration-700 ease-out 
                        ${showElements ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"} 
                        sm:text-center md:text-left`}
                    >
                        <h1
                            className={`text-3xl pt-3 sm:text-4xl md:text-5xl font-bold mb-3 ${theme === "dark" ? "text-green-700" : "text-green-800"}`}
                        >
                            About Me
                        </h1>
                        <p className={`text-lg mb-4 ${theme === "dark" ? "text-gray-300" : "text-[#001800]"}`}>
                            I'm <span className={`text-xl font-bold ${theme === "dark" ? "text-green-500" : "text-green-800"}`}>M.Ali Shakeel</span>, a 17-year-old MERN-Stack Developer from Karachi with a passion for building high-performance web apps that solve real-world problems. I've already fallen in love with the art of problem-solving through programming, where every bug is a puzzle waiting to be solved.
                        </p>
                        <a href="https://drive.google.com/uc?export=download&id=11HonAq4FMmWOY-q-Z1t1iaato09R86bg">
                        <button
                            className={`mt-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 
                            ${theme === "dark" ? "bg-white text-green-600 hover:bg-gray-200" : "bg-green-600 text-white hover:bg-green-700"}`}
                            
                        >
                            Download My Resume
                        </button>
                        </a>
                       
                    </div>
                </div>

                {/* Skills Section */}
                <div className="w-full mt-6 px-4">
                    <h2 className={`text-3xl font-bold mb-8 text-center ${theme === "dark" ? "text-green-600" : "text-green-800"}`}>
                        MY SKILLS
                    </h2>

                    {/* Marquee Container */}
                    <div className="relative overflow-hidden group">
                        {/* Gradient Fade Effects */}
                        <div className={`absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r ${theme === "dark" ? "from-[#001800]" : "from-white"} to-transparent`}></div>
                        <div className={`absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l ${theme === "dark" ? "from-[#001800]" : "from-white"} to-transparent`}></div>

                        {/* Auto-scrolling Cards */}
                        <div className="flex gap-6 marquee">
                            {duplicatedSkills.map((skill, index) => (
                                <div key={index} className="flex-shrink-0 w-[150px] md:w-[180px]">
                                    <div className={`rounded-lg p-4 flex flex-col items-center justify-center h-[120px] transition-all duration-300 hover:shadow-lg ${theme === "dark" ? "bg-green-700 hover:bg-white hover:text-black text-white" : "bg-white hover:bg-green-700 text-black hover:text-white border border-gray-200"}`}>
                                        <div className="w-16 h-16 mb-2 flex items-center justify-center">
                                            <img
                                                alt={skill.name}
                                                src={skill.logo}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </div>
                                        <h3 className="text-center font-medium">{skill.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
