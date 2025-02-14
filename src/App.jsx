import {Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Blog from "./components/Blog"
import About from "./components/About"
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
        <Navbar/>
    <div className="p-2">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </div>
    </>

  )
}

export default App
