import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";

function App() {
    return (
        // 2xl:text-2xl
        <div className="my-2 sm:text-sm md:text-md lg:text-lg xl:text-xl">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
