import { Link } from "react-router-dom";
import { useState } from "react"
import { AiOutlineHome } from 'react-icons/ai'
import { ImBlog } from 'react-icons/im'
import { BsPerson } from 'react-icons/bs'
import { BiLogInCircle } from 'react-icons/bi'
import Login from "./Login"
import verbify from "../assets/verbify.svg"

const Navbar=()=>{
        const[showLogin,setShowLogin]=useState(false);
    
    return (
        <>
        <div className="NavContainer w-full h-16 flex justify-between items-center gap-10 p-4 bg-blue-200">
            
        <div className="flex gap-10">
            <Link to="/">
        <img src={verbify} alt="Verbify Logo" className="w-9 h-9"/>
        </Link>
            <Link to="/" className='flex flex-col justify-end items-center '>
                <AiOutlineHome/>
                Home
            </Link>

            <Link to="/Blog" className='flex flex-col justify-end items-center '>
            <ImBlog/>
            Blog
            </Link>

            <Link to="/About" className='flex flex-col justify-end items-center '>
            <BsPerson/>
            About
            </Link>
            </div>

            <button onClick={() => setShowLogin(true)} className="flex flex-col justify-end items-center">
            <BiLogInCircle/>
            LogIn
            </button>
            {showLogin && ( <Login setShowLogin={setShowLogin}/>
 
)}

        </div>
        </>
    )
}

export default Navbar