//to do 




import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

function Todo() {
    const [todo, setTodo] = useState("");
    
    // 1. Read from localStorage directly during initial state setup
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    // 2. Only keep the save effect (runs when `tasks` state updates)
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    // Update input
    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    // Add task
    const handleAdd = () => {
        if (todo.trim() === "") return;

        const newTask = {
            id: Date.now(),
            name: todo,
            completed: false,
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
        setTodo("");
    };

    // Add task when Enter is pressed
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAdd();
        }
    };

    // Delete task
    const handleDelete = (id) => {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => task.id !== id)
        );
    };

    // Toggle complete
    const handleComplete = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    return (
        <div style={{ width: "400px", margin: "30px auto" }}>
            <h1>Todo List</h1>

            <input
                type="text"
                placeholder="Enter a task"
                value={todo}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />

            <button onClick={handleAdd}>Add</button>

            <hr />

            <p>Total Tasks: {tasks.length}</p>
            <p>
                Completed: {tasks.filter(task => task.completed).length}
            </p>
            <p>
                Pending: {tasks.filter(task => !task.completed).length}
            </p>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "10px",
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleComplete(task.id)}
                        />

                        <span
                            style={{
                                flex: 1,
                                marginLeft: "10px",
                                textDecoration: task.completed
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {task.name}
                        </span>

                        <MdDelete
                            size={22}
                            color="red"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleDelete(task.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;