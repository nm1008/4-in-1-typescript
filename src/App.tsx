import { Routes, Route } from "react-router";

import Nav from "./components/Navbar/nav";
import Todo from "./pages/TodoList/Todo";

import "./App.css";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/todoList" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
