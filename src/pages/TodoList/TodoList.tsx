import React, { useState, useEffect } from 'react';

interface Todo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');
    const [newDescription, setNewDescription] = useState<string>('');
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
            const newTodoItem: Todo = {
                id: newId,
                title: newTodo,
                description: newDescription,
                completed: false,
            };
            setTodos([...todos, newTodoItem]);
            setNewTodo('');
            setNewDescription('');
        }
    };

    const handleDeleteTodo = (id: number) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    const handleToggleComplete = (id: number) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        });

        setTodos(updatedTodos);
    };

    const handleEditTodo = (todo: Todo) => {
        setSelectedTodo(todo);
    };

    const handleSaveTodo = () => {
        if (selectedTodo) {
            const updatedTasks = todos.map((t) => {
                if (t.id === selectedTodo.id) {
                    return selectedTodo;
                }
                return t;
            });
            setTodos(updatedTasks);
            setSelectedTodo(null);
        }
    };

    useEffect(() => {
        // Получаем сохраненные данные из Local Storage
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        // Сохраняем данные в Local Storage при изменении состояния todos
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Enter a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter a description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>

            <h2>All todos:</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleComplete(todo.id)}
                        />
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => handleEditTodo(todo)}>Edit</button>
                        {todo.description && <p>{todo.description}</p>}
                    </li>
                ))}
            </ul>

            <h2>Completed todos:</h2>
            <ul>
                {todos
                    .filter((todo) => todo.completed)
                    .map((todo) => (
                        <li key={todo.id}>
                            {todo.title}
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleToggleComplete(todo.id)}
                            />
                            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                            {todo.description && <p>{todo.description}</p>}
                        </li>
                    ))}
            </ul>

            <h2>Incomplete todos:</h2>
            <ul>
                {todos
                    .filter((todo) => !todo.completed)
                    .map((todo) => (
                        <li key={todo.id}>
                            {todo.title}
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => handleToggleComplete(todo.id)}
                            />
                            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                            <button onClick={() => handleEditTodo(todo)}>Edit</button>
                            {todo.description && <p>{todo.description}</p>}
                        </li>
                    ))}
            </ul>

            {selectedTodo && (
                <div>
                    <h2>Edit Task</h2>
                    <input
                        type="text"
                        name="title"
                        value={selectedTodo.title}
                        onChange={(e) =>
                            setSelectedTodo({ ...selectedTodo, title: e.target.value })
                        }
                    />
                    <textarea
                        name="description"
                        value={selectedTodo.description}
                        onChange={(e) =>
                            setSelectedTodo({ ...selectedTodo, description: e.target.value })
                        }
                    ></textarea>
                    <button onClick={handleSaveTodo}>Save</button>
                </div>
            )}
        </div>
    );
};

export default TodoList;