import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="gradient">
                <Navbar />
                <Home />
              </div>
            }
          ></Route>
          <Route
            path="/portfolio"
            element={
              <div>
                <Navbar />
                <Portfolio />
              </div>
            }
          ></Route>
          <Route
            path="/skills"
            element={
              <>
                <Navbar />
                <Skills />
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
