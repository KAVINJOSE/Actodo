import Card from '../components/Card';
import TodoContainer from "../components/TodoContainer";
import Header from "../components/header";
import { useLocation } from "react-router-dom"
import {React} from "react"

function Landing(){

   const userdata = useLocation()
   console.log(userdata)
   return (
    <div className="bg-black p-16">
    <div className="bg-[#EFEFEF] p-10 border rounded-md">
      <Header name = {userdata.state.user} />

      <div className="flex gap-7 justify-between my-5 flex-wrap">
        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
        <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14:03:34"} />
        <Card bgcolor={"#FCA201"} title={"Build Using"} subtitle={"React"} />
      </div>
      <TodoContainer />
    </div>
  </div>
   )
}

export default Landing