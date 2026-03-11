import { React, useReducer, useRef } from 'react'
export const UseReducerList = () => {
    const [tasks, dispatch] = useReducer((state = [], action) => {
        switch (action.type) {
            case "ADD_TASK": {
                return [...state, { title: action.title, id: state.length }]
            }
            default: {
                return state
            }
        }
    },);

    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: "ADD_TASK",
            title: inputRef.current.value
        })
    }


    return (
        <>
            <h1>UseReducer</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Lista</label>
                <input type="text" id="title" name="title" ref={inputRef} />
                <input type="submit" value="Add Item" />
            </form>
            <ul>
                {tasks && tasks.map((task, index) => (
                    <li key={index}>{task.title}</li>
                ))}
            </ul>
        </>
    )
}