import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/frontend/Home"
import About from "@/pages/frontend/About";
import Team from "@/pages/frontend/Team";
import Project from "@/pages/frontend/Project";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Frontend Page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/projects" element={<Project />}/>

        {/* Auth Page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
