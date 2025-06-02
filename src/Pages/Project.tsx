import { useTheme } from "../context/ThemeProvider";
import Screenshot from "../assets/Screenshot 2025-05-31 153458.png"
import TO_DO from "../assets/TODO.jpg"
import Quiz_App from "../assets/Quiz_App.jpg"
import threeD from "../assets/threeD.jpg"
import Dribble from "../assets/Drbble.jpg"

export default function Project() {
    const { theme } = useTheme();

    const projects = [
        {
            id: 1,
            name: "School Attendance",
            image: `${Screenshot}`, // Replace with your own image
            link: "https://attendence-web-eni1.vercel.app/"
        },
        {
            id: 2,
            name: "3D",
            image: `${threeD}`, // Replace with your own image
            link: "https://3dpactice.vercel.app/"
        },
        {
            id: 3,
            name: "TO-DO App",
            image: `${TO_DO}`, // Replace with your own image
            link: "https://assignment-18-11a69.web.app/"
        },
        {
            id: 4,
            name: "Quiz App",
            image: `${Quiz_App}`, // Replace with your own image
            link: "https://quiz-app-1d5e7.web.app/"
        },
         {
            id: 5,
            name: "Dribble",
            image: `${Dribble}`, // Replace with your own image
            link: "https://www.linkedin.com/posts/alishakeel62_reactjs-webdevelopment-firstproject-activity-7195480602979057664-d2pb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEenzCkBIfMjOOCwpMcS6PckYl0FLqWHVgc"
        },
    ];

    return (
        <main className={`w-full max-h-screen px-4 py-12 ${theme === "dark" ? "bg-[#001800] text-white" : "bg-white text-green-900"}`}>
            <h1 className="text-5xl font-bold text-center mb-12 animate-bounce">Projects</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {projects.map((project) => (
                    <a
                        href={project.link}
                        key={project.id}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group h-38 rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105"
                        style={{
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >
                        {/* Hover Overlay */}
                        <div
                            className={`absolute inset-0 flex items-center justify-center transition duration-300 ease-in-out
                                ${theme === "dark"
                                    ? "bg-white opacity-0 group-hover:opacity-80 text-green-800"
                                    : "bg-green-700 opacity-0 group-hover:opacity-60 text-white"}
                            `}
                        >
                            <span className="opacity-0 group-hover:opacity-100 text-lg font-semibold transition-opacity duration-300">
                                {project.name}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </main>
    );
}
