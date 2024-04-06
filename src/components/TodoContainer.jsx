import AddTodoform from "./AddTodoform";
import TodoList from "./TodoList";
import { useState } from "react";

function TodoContainer() {

    const [actarr,setactarr] = useState([
        {
            id:1,
            activity:"Go for a walk"
        },

        {
            id:2,
            activity:"Work Hard"
        }
    ])


  return (
      <>
       <div className="flex gap-5 flex-wrap">
        <AddTodoform actarr = {actarr} setactarr = {setactarr}/>

        <TodoList actarr = {actarr} setactarr = {setactarr}/>
      </div>
      </>
      
  );
}

export default TodoContainer;
