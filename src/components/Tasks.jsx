import NewTasks from "./NewTasks.jsx";

export default function Tasks({ tasks, onAdd, onDelete }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTasks onAdd={onAdd} />
            {tasks.length === 0 && (<p className="text-stone-800 my-4">This project don't have any tasks yet.</p>)}
            {tasks.length > 0 && (<ul>
                {tasks.map((task) => (
                    <li key={task.id} className="flex items-center justify-between py-2 rounded-sm border-b-2 border-stone-300">
                        <span className="text-stone-700">{task.text}</span>
                        <button onClick={() => onDelete(task.id)} className="text-stone-700 hover:text-red-500">Clear</button>
                    </li>
                ))}
            </ul>)}
        </section>
    );
}