export const TaskCard = ({task , Del}) => {
  return (
   <>
     <li  className= { task.completed ? "completed":"incomplete"}>
      <span>{task.id} - {task.name}</span>
      <button onClick={()=>Del(task.id)} className="delete">Delete</button>
    </li>
   </>
   );
}
