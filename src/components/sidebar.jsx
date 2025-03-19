import Button from "./Button.jsx";

export default function Sidebar({ onStartAddProject, projects }) {
    return (
        <aside className="sidebar w-1/3 md:w-72 text-stone-50 bg-stone-900 rounded-r-lg px-8 py-16">
            <div>
                <h2 className="text-stone-200 mb-8 font-bold uppercase md:xl">Your Projects</h2>
            </div>
            <div>
                <Button onClick={onStartAddProject}>
                    + Add New Project
                </Button>
            </div>
            <div>
                <ul className="mt-8">
                    {projects.map((project) => (
                        <li key={project.id} >
                            <button className="w-full text-left text-stone-400 py-1 px-2 my-1 rounded-sm hover:text-stone-200 hover:bg-stone-800">{project.title}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}