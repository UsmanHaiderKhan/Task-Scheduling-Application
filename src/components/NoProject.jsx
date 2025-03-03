import noProjectImage from '../assets/no-projects.png';
import Button from './Button.jsx';
export default function NoProject() {
    return (
        <div className="mt-24 w-2/3 text-center">
            <img src={noProjectImage} alt="No Project image" className='w-16 h-16 object-contain mx-auto' />
            <h2 className="text-stone-800 text-2xl font-bold my-4">No Project Selected</h2>
            <p className="text-stone-600 mt-4 mb-4">Please select a project from the sidebar or create a new one.</p>
            <div className='mt-8'>
                <Button>Create new Project</Button>
            </div>
        </div>
    );
}