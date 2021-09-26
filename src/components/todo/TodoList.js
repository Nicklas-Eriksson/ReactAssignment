import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import './Todo.css'

function TodoList() {
    const [tasks, setTasks] = useState([])

    const addTask = task => {
        //So spaces ans stuff wont be added to the task
        if(!task.text || /^\s*$/.test(task.text)){
            return
        }

        const newTask = [task, ...tasks]

        setTasks(newTask)
    }

    const completeTask = id => {
        let editTasks = tasks.map(task => {
            if(task.id === id){
                task.isDone = !task.isDone
            }
            return task
        })
        setTasks(editTasks)
    }

    const deleteTask = id => {
        const remove = [...tasks].filter(task => task.id !== id)
        setTasks(remove)
    }

    const editTask = (taskId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }

        setTasks(prev => prev.map(i => (i.id === taskId ? newValue : i)))
    }

    return (
        <div>
            <div className="taskManager">
                <h1>Task Manager</h1>
                <TodoForm 
                onSubmit={addTask}
                />
                <Todo
                tasks={tasks}
                completeTask={completeTask}
                editTask={editTask}
                deleteTask={deleteTask}
                />
            </div>
        </div>
    )
}

export default TodoList