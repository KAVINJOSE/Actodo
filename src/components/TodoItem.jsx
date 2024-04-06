function TodoItem(props) {
  
const actarr = props.actarr;
const setactarr = props.setactarr;

  const handleDelete =  (deleteid)=>{
        
    {
        var temparr = actarr.filter((item)=>{
            if(item.id === deleteid){
                return false
            }

            else{
                return true
            }
        })
     
        setactarr(temparr)
    }


  }

  return (
    <div className="flex justify-between">
      <p>
        {props.index + 1}.{props.item.activity}
      </p>
      <button className="text-red-500" onClick={()=>{handleDelete(props.id)}}>Delete</button>
    </div>
  );
}

export default TodoItem;
