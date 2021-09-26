import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const inputFocus = useRef(null) 

    useEffect(()=>{
        inputFocus.current.focus()
    })

    const submit = e =>{
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random()*99999),
            text: input
        })

        setInput('')
    }

    const change = e =>{
       setInput(e.target.value)
    }

    return (
        <form 
        className='todoForm'
        onSubmit={submit}
        >
            {(props.edit ? (
                <div>
                    <input 
                    className='todoInput'
                    placeholder='Edit...'
                    value={input}
                    type="text" 
                    onChange={change}
                    ref={inputFocus}
                    />

                    <button
                    className='addBtn'>
                        Edit
                    </button>
                </div>
            ) : (
                <div>
                    <input 
                    className='todoInput'
                    placeholder='New Task...'
                    value={input}
                    type="text" 
                    onChange={change}
                    ref={inputFocus}
                    />

                    <button
                    className='addBtn'>
                        Add
                    </button>
                </div>
            ))
        }
            
        </form>
    )
}

export default TodoForm