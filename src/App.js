import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Layout from "./Components/Layouts/Layout";
import Signin from "./Components/Pages/Signin";
import Signup from "./Components/Pages/Signup";
import { Contact } from "./Components/Pages/Contact";
import LearnHooks from "./Components/Modules/LearnHooks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
              <Route index path='/' element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/LearnHooks" element={<LearnHooks />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
