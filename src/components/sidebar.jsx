import Button from "./Button.jsx";

export default function Sidebar({ onStartAddProject }) {
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
        </aside>
    );
}