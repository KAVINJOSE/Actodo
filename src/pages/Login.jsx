import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(props){

    const[eusername,seteusername] = useState("")
    const[epassword,setepassword] = useState("")
    const[ruser,setruser] = useState(true)
    const users = props.users
    const setusers = props.setusers
    const navigate = useNavigate()

    var userfound = false

    const checkuser = ()=> {
        users.forEach((item)=> {
            if(item.username == eusername && item.password == epassword){
                console.log("Success")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
            // else{
            //     console.log("Failed")
            //     setruser(false)
            //  }
        })

        if(userfound == false)
        {
            console.log("login failed")
            setruser(false)
        }
    }

    function handleUinput(e){
       seteusername(e.target.value)
    }

    function handlePinput(e){
       setepassword(e.target.value)
    }


  return (
    <div className="bg-black p-10">

    <div className="bg-[#EFEFEF] p-10 border rounded-md">
    <h1 className="font-medium text-3xl">Hey Hi</h1>
    {ruser? <p>I help you manage your actitvities after you login :)</p>:<p className="text-red-500">Please Sign Up before Login</p>}
   

    <div className="flex flex-col gap-2 my-2">
       <input type="text" className="w-52 border border-black bg-transparent p-1 rounded-md" placeholder="username" onChange={handleUinput}/>
       <input type="text" className="w-52 border border-black bg-transparent p-1 rounded-md" placeholder="password" onChange={handlePinput}/>
       

       <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser}>Login</button>

       <p>Already have an account? <Link to="/signup" className="underline">Sign Up</Link></p>
    </div>
    </div>

 
 </div>
  )
}

export default Login

