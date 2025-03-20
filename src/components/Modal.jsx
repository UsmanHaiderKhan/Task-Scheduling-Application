import { useImperativeHandle, useRef, forwardRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";
const Modal = forwardRef(function Modal({ children, buttonText }, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 backdrop-filter shadow-sm backdrop-blur-sm p-4 rounded-sm">
            {children}
            <form method="dialog" className="text-right mt-4">
                <Button>{buttonText}</Button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
        // <div className="fixed inset-0 bg-stone-900 bg-opacity-50 flex items-center justify-center">
        //     <div className="bg-stone-800 p-8 rounded-lg w-[35rem]">
        //         <h2 className="text-stone-50 text-xl font-bold mb-4">Add New Project</h2>
        //         <div className="flex flex-col gap-4">
        //             <div>
        //                 <label className="text-stone-200 block mb-2">Project Title</label>
        //                 <input type="text" className="w-full p-2 border-b-2 rounded-sm border-stone-300 text-stone-600 bg-stone-200 focus:outline-none focus:border-stone-600" />
        //             </div>
        //             <div>
        //                 <label className="text-stone-200 block mb-2">Description</label>
        //                 <textarea className="w-full p-2 border-b-2 rounded-sm border-stone-300 text-stone-600 bg-stone-200 focus:outline-none focus:border-stone-600" />
        //             </div>
        //             <div>
        //                 <label className="text-stone-200 block mb-2">Due Date</label>
        //                 <input type="date" className="w-full p-2 border-b-2 rounded-sm border-stone-300 text-stone-600 bg-stone-200 focus:outline-none focus:border-stone-600" />
        //             </div>
        //         </div>
        //         <div className="flex items-center gap-4 my-4 justify-end">
        //             <button className="text-stone-800 hover:text-stone-850">Cancel</button>
        //             <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
        //         </div>
        //     </div>
        // </div>
    );
});
export default Modal;