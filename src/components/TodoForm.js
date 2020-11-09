import React from 'react'

const TodoForm = ({setState, state, todos, setTodos}) => {
    const handleChange = (e) => {
        setState(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {
                uuid: (Math.random),
                text: state, 
                completed: false
            }
        ])
        setState('');
    }

    return(
        <form>
            <input 
            type="text" 
            className="todo-input"
            onChange={handleChange}
            />
            <button className="todo-button" 
                type="submit"
                onClick={handleSubmit}
                >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
            
    )
}

export default TodoForm;


