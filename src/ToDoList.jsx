import chuttu from './assets/Rarandio.mp3';
import React , {useState} from 'react'


function ToDoList(){
    const [tasks , setTasks] = useState([])
    const text_input = document.querySelector(".task-input")
    
    function addTask(){
        let newTask = text_input.value
        if(newTask.trim()!="")
            {
            setTasks(t=>[... t , newTask ])
            text_input.value=""
            }
        else{
            alert("Enter a task")
        }
        
    }

    function deleteTask(index){
        setTasks(tasks.filter((element , i)=> i!=index))
    }

    function moveTaskUp(index){
        console.log(index)
        if(index>0)
        {
            let updatedTasks = [...tasks];
            [updatedTasks[index] , updatedTasks[index-1]] = 
            [updatedTasks[index-1] , updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){

        console.log(index)
            if(index<tasks.length-1)
            {
                let updatedTasks = [...tasks];
                [updatedTasks[index] , updatedTasks[index+1]] = 
                [updatedTasks[index+1] , updatedTasks[index]]
                setTasks(updatedTasks);
            }
        
    }

    return(
        <div className='to-do-list'>
            <h1>To Do List</h1>
            <div className='for-input'>
                <input className='task-input' placeholder='Enter a task'
                />
                <button className='add-button' onClick={addTask} title='Adds a task'>
                ADD TASK
            </button>
            </div>
            <ol>
                {tasks.map((task , index)=>
                <li key={index} className='a-task'>
                    <span className="text">{task} </span>
                    
                    <span className="for-buttons">
                        
                        <button className="delete-button" onClick={()=>deleteTask(index)} title='Deletes this task'>Delete</button>
                        <button className="move-button" onClick={()=>moveTaskUp(index)} title='Moves this task up'>⬆️</button>
                        <button className="move-button" onClick={()=>moveTaskDown(index)} title='Moves this task down'>⬇️</button>
                    </span>
                </li>)}
            </ol>
                    <hr style={{width:"90%"}}/>
            <center>
      <audio src={chuttu} controls autoPlay loop></audio>
      </center>
        </div>
    )
}
export default ToDoList