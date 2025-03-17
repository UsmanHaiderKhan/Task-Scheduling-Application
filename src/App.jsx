import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProject from "./components/NoProject.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
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
      const newProject = {
        ...projectData,
        id: Math.random().toString(),

      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    });
  }

  console.log(projectState.projects);

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />;
  }
  return (
    <>
      <main className="h-screen py-8 flex gap-8">

        <Sidebar onStartAddProject={handleStartAddProject} />
        {content}

      </main>
    </>
  );
}

export default App;
