import NewProject from "./components/NewProject";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <main className="h-screen py-8 flex gap-8">

        <Sidebar />
        <NewProject />

      </main>
    </>
  );
}

export default App;
