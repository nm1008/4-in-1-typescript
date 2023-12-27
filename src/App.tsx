import { Routes, Route } from "react-router";

import Nav from "./components/Navbar/Nav";
import Calculator from "./pages/Calculator/Calculator";
import Todo from "./pages/TodoList/Todo";
import ClockPage from "./pages/Clock/ClockPage";
import Weather from "./pages/Weather/Weather";


import "./App.css";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/todoList" element={<Todo />} />
        <Route path="/clock" element={<ClockPage />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </>
  );
}

export default App;
