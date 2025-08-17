import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/signup.jsx";
import { useState } from "react";
import Footer from "./components/footer.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const handleUserSignup = (userData) => {
    setUsers((prev) => [...prev, userData]);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <img
        src="https://images.unsplash.com/photo-1625225230517-7426c1be750c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Desktop Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <Navbar />

      <main className="flex-grow relative z-10 p-6 text-white">
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/signup"
            element={<SignUp onSignup={handleUserSignup} />}
          />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
