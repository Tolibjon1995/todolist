function Todo({todo, toggleTask, deletTodo}) {
    return (
        <div key={todo.id} className='item-todo'>
            <div className={todo.complete ? 'item-text strike' : 'item-text'}
            onClick={()=>toggleTask(todo.id)}
            >
            {todo.task}
            </div>
            <div className="item-delete" onClick={()=>deletTodo(todo.id)}>
            X
            </div>
        </div>
    )
}

export default Todo