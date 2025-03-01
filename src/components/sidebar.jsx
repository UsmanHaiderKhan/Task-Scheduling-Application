export default function Sidebar() {
    return (
        <aside className="sidebar w-1/3 md:w-72 text-stone-50 bg-stone-900 rounded-r-lg px-8 py-16">
            <div>
                <h2 className="text-stone-200 mb-8 font-bold uppercase md:xl">Your Projects</h2>
            </div>
            <div>
                <button className="px-4 py-2 text-sm md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                    + Add New Project
                </button>
            </div>
        </aside>
    );
}