function Task({task,deleteTodo}){
    return(
        <div className="border border-white w-full flex justify-between p-2 rounded">
            <p className="text-white font-bold">{task.todoName}</p>
            <button className="text-red-500 font-bold hover:scale-115 duration-100" onClick={() =>
                deleteTodo(task._id)}>X</button>
          </div>
    );
}
export default Task;