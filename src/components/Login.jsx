import { useState } from "react"

const Login = ({setShowLogin})=>{
    const[name,setName]=useState("");
    const[pass,setPass]=useState("");

    const handleSubmitBtn=()=>{
        if(!name.trim() || !pass.trim()){
            alert("Please Enter Name and Password😩");
            return;
        }

        alert("Login Successfully🎊");
        setShowLogin(false);

    }
    return(
        <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md w-80">
        <h2 className="text-blue-400 text-xl underline mb-4 text-center">Login</h2>
        
        <input type="text" className="border px-3 py-2 mb-3 w-full" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
        <input type="password" className="border px-3 py-2 mb-3 w-full" placeholder="Enter your password" onChange={(e)=>setPass(e.target.value)}/>
        
        <div className="flex justify-between mt-4">
          <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={() => setShowLogin(false)}>Cancel</button>
          <button className="bg-blue-400 text-white px-4 py-2 rounded" onClick={handleSubmitBtn}>Submit</button>
        </div>
      </div>
    </div>
        </>
    )
}


export default Login 