import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProject from "./components/NoProject.jsx";
import Sidebar from "./components/Sidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }

    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random().toString();
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
        ...prevState,
        selectedProjectId: null,
        projects: [...prevState.projects, newProject]
      }
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          project => project.id !== prevState.selectedProjectId)
      }
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
      
        projects: prevState.tasks.filter(
          task => task.id !== id)
      }
    });
  }

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random().toString();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      }
    });
  }


  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
  let content = <SelectedProject project={selectedProject}
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={projectState.tasks}
    selectedProjectId={projectState.selectedProjectId} />;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen py-8 flex gap-8">

        <Sidebar onStartAddProject={handleStartAddProject}
          projects={projectState.projects} onSelectProject={handleSelectProject} />
        {content}

      </main>
    </>
  );
}

export default App;
