import { ThemeProvider } from "./context/ThemeProvider";
import { ToggleButton } from "./component/Togglebutton";
import Sidebar from "./component/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";


function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container flex min-h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="flex-1 flex flex-col ">
            {/* Topbar */}
            <nav className="p-3 flex justify-end bg-[var(--nav)]">
              <ToggleButton />
            </nav>

            {/* Pages */}
            <main className="p-1  flex-grow bg-[var(--background)] text-white">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} /> */}
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
