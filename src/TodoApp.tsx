import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
    setTodo("");
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleClick = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };

        return todo;
      })
    );
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p
              onClick={() => handleClick(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </p>
            <button onClick={() => handleDelete(todo.id)}>x</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
