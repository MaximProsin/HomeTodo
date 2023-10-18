import HomePage from './pages/HomePage/HomePage'
import TodoList from './pages/TodoList/TodoList'

import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
