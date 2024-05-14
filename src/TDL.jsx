import React, { useState, useEffect, useRef } from 'react';
import chuttu from './assets/Rarandio.mp3';
import ContactUs from './ContactUs';

function TDL() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [showContactUs, setShowContactUs] = useState(false);
    const contactUsRef = useRef(null);
    let timeoutId;

    useEffect(() => {
        function handleClickOutside(event) {
            if (contactUsRef.current && !contactUsRef.current.contains(event.target)) {
                setShowContactUs(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function addTask() {
        if (taskInput.trim() !== "") {
            setTasks([...tasks, taskInput]);
            setTaskInput('');
        } else {
            alert("Enter a task");
        }
    }

    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function handleContactUsClick() {
        if(showContactUs)        
            setShowContactUs(false);
        else{
            setShowContactUs(true);
        }
    }

    return (
        <div className='to-do-list'>
            <div className="top">
                <h1>To Do List</h1>
                <div className='for-input'>
                    <input
                        className='task-input'
                        placeholder='Enter a task'
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                    />
                    <button className='add-button' onClick={addTask} title='Adds a task'>+</button>
                </div>
            </div>
            <div className='for-ul'>
                {tasks.map((task, index) => (
                    <div key={index} className='a-task'>
                        <p className="text">{index+1}.{task}</p>
                        <span className="for-buttons">
                            <button className="delete-button" onClick={() => deleteTask(index)} title='Deletes this task'>X</button>
                            <button className="move-button" onClick={() => moveTaskUp(index)} title='Moves this task up'>⬆️</button>
                            <button className="move-button" onClick={() => moveTaskDown(index)} title='Moves this task down'>⬇️</button>
                        </span>
                    </div>
                ))}
            </div>
            <hr style={{ width: "90%" }} />
            <center>
    <audio className='audio-player' src={chuttu} controls loop></audio><br />
    <span className="footr">©️ 2024 mm.pvt.ltd and to
        <a href="#" title='click here' onClick={handleContactUsClick}> CONTACT US</a>
    </span>
    {showContactUs && <ContactUs/>}
</center>

        </div>
    );
}

export default TDL;
