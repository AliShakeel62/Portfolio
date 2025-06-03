import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeProvider";
import profile from "../assets/profile.jpg";
import {
  HomeOutlined,
  FolderOpenOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgColor = theme === "light" ? "bg-[#001800]" : "bg-white";
  const textColor = theme === "light" ? "text-white" : "text-green-900";
  const iconColor = theme === "light" ? "#ffffff" : "#065f46";

  const linkStyle = (path: string) =>
    clsx(
      "flex items-center gap-3 px-4 py-2 rounded transition hover:bg-green-400",
      location.pathname === path ? "bg-green-400 font-semibold" : ""
    );

  return (
    <>
      {/* Toggle Button (Mobile) */}
      <button
        className={clsx(
          "md:hidden p-2 fixed top-4 left-4 z-50 rounded-full shadow transition",
          theme === "light" ? "bg-[#001800] text-white" : "bg-white text-green-600"
        )}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={clsx(
          "fixed md:relative top-0 left-0 min-h-screen h-full w-64 p-5 transition-transform duration-300 z-40 shadow-md",
          open ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0",
          bgColor,
          textColor
        )}
      >
        {/* Profile */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={profile}
            alt="Profile"
            className="w-20 h-20 rounded-full border-white mb-2 object-cover"
          />
          <h2 className="text-xl font-bold">M.Ali Shakeel</h2>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="space-y-4 text-lg font-medium">
            <li>
              <Link to="/" className={linkStyle("/")}> 
                <HomeOutlined style={{ color: iconColor, fontSize: "20px" }} /> Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className={linkStyle("/projects")}>
                <FolderOpenOutlined style={{ color: iconColor, fontSize: "20px" }} /> Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkStyle("/contact")}>
                <MailOutlined style={{ color: iconColor, fontSize: "20px" }} /> Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className={linkStyle("/about")}>
                <UserOutlined style={{ color: iconColor, fontSize: "20px" }} /> About Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
