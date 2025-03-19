import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAddProject, onCancel }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modalRef = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 ||
            enteredDueDate.trim().length === 0) {
            modalRef.current.open();
            return;
        }


        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }
    return (
        <>
            <Modal ref={modalRef} buttonText="Close">
                <h2 className="text-stone-800 text-2xl font-bold my-4">Invalid Input</h2>
                <p className="text-stone-700 mt-4 mb-4">Oops look like you forget to enter a value.</p>
                <p className="text-stone-700 mt-4 mb-4">please make sure you provide a valid value for every input field. </p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center gap-4 my-4 justify-end">
                    <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-850">Cancel</button></li>
                    <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
                </menu>
                <div>
                    <Input ref={title} type="text" label="Project Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input ref={dueDate} type="date" label="Due Date" />

                </div>
            </div>
        </>

    );
}