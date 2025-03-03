import NewProject from "./components/NewProject.jsx";
import NoProject from "./components/NoProject.jsx";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <>
      <main className="h-screen py-8 flex gap-8">

        <Sidebar />
        <NoProject />

      </main>
    </>
  );
}

export default App;
