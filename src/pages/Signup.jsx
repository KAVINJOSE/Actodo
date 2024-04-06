
import { Link } from "react-router-dom"
import { useState  } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props){
    const users = props.users
    const setusers = props.setusers
    const[eusername,seteusername] = useState("")
    const[epassword,setepassword] = useState("")
    const navigate = useNavigate()

    function handleUinput(e){
        seteusername(e.target.value)
     }
 
     function handlePinput(e){
        setepassword(e.target.value)
     }

     function addUser(){
        setusers(
            [...users,{username:eusername,password:epassword}]
        )
        navigate("/")
     }

    return (
        <div className="bg-black p-10">

           <div className="bg-[#EFEFEF] p-10 border rounded-md">
           <h1 className="font-medium text-3xl">Hey Hi</h1>
           <p>Sign Up here :)</p>

           <div className="flex flex-col gap-2 my-2">
              <input type="text" className="w-52 border border-black bg-transparent p-1 rounded-md" placeholder="username" onChange={handleUinput}/>
              <input type="text" className="w-52 border border-black bg-transparent p-1 rounded-md" placeholder="password" onChange={handlePinput}/>
              <input type="text" className="w-52 border border-black bg-transparent p-1 rounded-md" placeholder="confirm password"/>

              <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>Sign Up</button>

              <p>Don't have an account? <Link to="/" className="underline">Login</Link></p>
           </div>
           </div>

        
        </div>
    )
  }

          
  
  export default Signup