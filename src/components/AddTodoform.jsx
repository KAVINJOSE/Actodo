import { useState } from "react"

function AddTodoform(props){

    const actarr = props.actarr
    const setactarr = props.setactarr
    const[newactivity,setnewactivity] = useState("")

    function handleChange(e){
        setnewactivity(e.target.value)
    }

    function handleAdd(){
        setactarr([...actarr,{id:actarr.length+1,activity:newactivity}])
        setnewactivity("")
    }

    return(
        <>
         <div className="flex flex-col gap-3">
          <h1 className="font-medium text-2xl">Manage Activities</h1>

          <div>
          <input type="text" onChange={handleChange} value={newactivity} placeholder="New Actitvity?" className="bg-transparent border border-black p-1 " />
          <button onClick={handleAdd} className="bg-black text-white p-1 border border-black"> Add</button>
          </div>
        </div>
        </>
    )
}
export default AddTodoform