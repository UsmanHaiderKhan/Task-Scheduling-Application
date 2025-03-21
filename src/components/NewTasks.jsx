import { useState } from "react";

export default function NewTasks() {
    const [enteredTask, setEnteredTask] = useState();
    function handleChange(event) {
        setEnteredTask(event.target.value);
    }
    return (
        <div className="flex items-center gap-4">
            <input type="text" className="rounded-sm w-64 px-2 py-1 bg-stone-200"
                onChange={handleChange} value={enteredTask} />
            <button className="text-stone-700 hover:text-stone-950">Add New Task</button>
        </div>
    );
}