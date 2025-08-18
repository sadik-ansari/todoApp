import React, { useState, useReducer, act } from 'react'
import './TodoApp.css'

let inintialValue = 3

let initialArg = [
    { id: 1, desc: "kdnasdkcnk", complete: false }
]

function reducer(state, action) {
    switch (action.type) {
        case "add": {
            return [...state, {
                id: action.id,
                desc: action.desc,
                complete: false
            }]
        }

        case "update": {
            return state.map(t => {
                return t.id === action.id ? { ...t, desc: action.desc } : t
            })
        }

        case "delete": {
            return state.filter(t => t.id !== action.id)
        }

        case "check": {
            return state.map(t => {
                return t.id === action.id ? { ...t, complete: !t.complete } : t
            })
        }

        default: state
            break;
    }
}

const TodoApp = () => {
    const [state, dispatch] = useReducer(reducer, initialArg);
    const [desc, setDesc] = useState("");
    const [editId, setEditId] = useState(null);
    const [filter, setFilter] = useState("All");

    function handleAddTodo() {
        dispatch({
            type: "add",
            id: inintialValue++,
            desc: desc
        })
        setDesc("")
    }

    function handleEditTodo(id) {
        const todo = state.find(tId => tId.id === id)
        setDesc(todo.desc)
        setEditId(id)
    }

    function handleUpdate(id) {
        dispatch({
            type: "update",
            id: id,
            desc: desc
        })
        setEditId(null)
    }

    function handleDeleteTodo(id) {
        dispatch({
            type: "delete",
            id
        })
    }

    function handleCheckTodo(id) {
        dispatch({
            type: "check",
            id
        })
    }

    const handleFilter = (e) => {
        setFilter(e.target.value);
    };

    const filteredTodos = state.filter(todo => {
        if (filter === "Completed") return todo.complete;
        if (filter === "Pending") return !todo.complete;
        return true; // "All"
    });

    return (
        <div className="container py-5">
            <h2 className="text-center fw-bold mb-4">TODO LIST</h2>

            <div className="d-flex justify-content-between mb-5">
                <div className="add-todo d-flex gap-3 w-50">
                    <input className="form-control bg-white p-2" type="text" placeholder='add new todo' value={desc} onChange={((e) => setDesc(e.target.value))} />
                    <button className="btn-icon btn-primary rounded-1" onClick={handleAddTodo}>Add Task</button>
                </div>
                <select className="form-select w-auto" onChange={handleFilter}>
                    <option >All</option>
                    <option>Completed</option>
                    <option>Pending</option>
                </select>
            </div>
            {filteredTodos.map(todo => {
                return (

                    <div key={todo.id} className="todo-box d-flex flex-row justify-content-between border border-1 rounded-1 p-2">
                        {editId === todo.id ?
                            <>
                                <div className="todo-update d-flex gap-2 w-100">
                                    <input className="form-control bg-white" type="text" onChange={(e) => setDesc(e.target.value)} />
                                    <button onClick={(() => handleUpdate(todo.id))} className="btn-icon btn-primary rounded-1">Update</button>
                                </div>
                            </>
                            :
                            <>
                                <div className="form-check d-flex align-items-center gap-3">
                                    <input className="form-check-input" checked={todo.complete} onChange={(() => handleCheckTodo(todo.id))} type="checkbox" id="todo1" />
                                    <li className={`list-unstyled ${todo.complete ? "text-decoration-line-through" : ""}`}>{todo.desc}</li>
                                </div>
                                <div className="d-flex gap-4">
                                    <button className="btn-icon btn-primary rounded-1" onClick={(() => handleEditTodo(todo.id))}>Edit</button>
                                    <button onClick={(() => handleDeleteTodo(todo.id))} className="btn-icon btn-secondary rounded-1">Delete</button>
                                </div>
                            </>}
                    </div>
                )
            })}

        </div>
    )
}

export default TodoApp