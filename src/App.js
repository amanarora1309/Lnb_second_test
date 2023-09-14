import { Route, Routes } from "react-router-dom";
import Card from "./pages/Card";
import Spinner from "./pages/Spinner";
import Navbar from "./pages/Navbar";
import TodoList from "./pages/TodoList";
import YourComponent from "./pages/YourComponent";

function App() {
  return (
    <>

      <Routes>

        {/* <Route exact path="/" element={<Card />} /> */}
      </Routes>
      {/* <Spinner /> */}
      {/* <TodoList /> */}
      <YourComponent />

    </>
  );
}

export default App;
