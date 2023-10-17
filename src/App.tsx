import HomePage from './pages/HomePage/HomePage'
import TodoList from './pages/TodoList/TodoList'

import { Route, Routes } from "react-router-dom";

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App
