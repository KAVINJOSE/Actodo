import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const actarr = props.actarr;
  const setactarr = props.setactarr;

  return (
    <>
      <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow ">
        <h1 className="font-medium text-2xl">Today's Activity</h1>

        {/* {actarr.length===0?<p>You haven't added any activity yet</p>:" "}
        
         actarr.map((index,item) => {
                 return <TodoItem actarr={actarr} setactarr= {setactarr} index={index} item = {item} id={item.id}></TodoItem>;
      }) */}

        {actarr.length === 0 ? 
          <p>You haven't added any activity yet</p>
         : 
          actarr.map((item, index) => {
            return (
              <TodoItem
                key={item.id}
                actarr={actarr}
                setactarr={setactarr}
                index={index}
                item={item}
                id={item.id}
              ></TodoItem>
            )
          })
       }
      </div>
    </>
  );
}

export default TodoList;
