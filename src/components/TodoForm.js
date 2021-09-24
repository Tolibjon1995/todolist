import { useState } from 'react'

function TodoForm({addTodo}) {
    const [userInput, setUserInput] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(userInput)
        setUserInput("")
    }
    
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleKeyPres = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={userInput}
                onChange={handleChange}
                onKeyDown={handleKeyPres}
                placeholder='Topshiriqni kiriting...'
            />
            <button>Saqlash</button>
        </form>
    )
}

export default TodoForm