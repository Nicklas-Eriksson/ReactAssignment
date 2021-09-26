import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Edit from '../../shared/img/icons/edit.png'
import Delete from '../../shared/img/icons/delete.png'

function Todo({tasks, completeTask, editTask, deleteTask}) {
    const [edit, setEdit] = useState({
    id: null,
    value: ''
    })

    const sendEdit = value  => {
        editTask(edit.id, value)
        setEdit({
            id: null,
            value:''
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={sendEdit} />
    }

    return tasks.map((task, i) => (
        <div className={task.isdone ? 'taskRow done' : 'taskRow'}
        key={i}
        >
            <div 
            key={task.id}
            onClick={()=>{
                completeTask(task.id)
            }}>
                {task.text}
            </div>
            <div className='icons'>
                    <img
                    className='deleteIcon'
                    src={Delete}
                    onClick={ ()=> deleteTask(task.id)}
                    />
                    <img
                    className='editIcon'
                    src={Edit}
                    onClick={ ()=> setEdit({id: task.id, value: task.text})}
                    />
             </div>
        </div>
    ))
}

export default Todo