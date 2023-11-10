import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoList from "./pages/TodoList";
import Counter from "./pages/Counter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
