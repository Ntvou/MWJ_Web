import { useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../amplify/data/resource";
import "./Dashboard.css";

const client = generateClient<Schema>();

function App() {
  const { user, signOut } = useAuthenticator();
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  // This part fetches your data from the database
  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  // Function to add a new item
  function createTodo() {
    const content = window.prompt("New content:");
    if (content) {
      client.models.Todo.create({ content: content });
    }
  }

  return (
    <div className="dashboard-container">

      {/* 1. SIDEBAR (Left side) */}
      <aside className="sidebar">
        <div className="logo-box">Logo</div>

        <div className="menu-group">
          <p className="menu-label">Main</p>
          <ul className="menu-list">
            <li>Dashboard</li>
            <li className="active-item">Content</li>
            <li>Analytics</li>
            <li>User</li>
          </ul>
        </div>

        <div className="menu-group">
          <p className="menu-label">System</p>
          <ul className="menu-list">
            <li>⚙️ Settings</li>
          </ul>
        </div>

        <button className="sign-out-btn" onClick={signOut}>
          <span>⬅</span> Sign out
        </button>
      </aside>

      {/* 2. MAIN CONTENT (Right side) */}
      <main className="main-area">

        {/* Top Header */}
        <header className="top-header">
          <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search bar" />
          </div>
          <div className="notification-bell">
            🔔
          </div>
        </header>

        {/* Content Body */}
        <section className="content-body">
          <h1 className="content-title">Content Management</h1>

          <div className="content-card">
            <p>Welcome back, <strong>{user?.signInDetails?.loginId}</strong>!</p>
            <hr />
            <button className="add-btn" onClick={createTodo}>+ Create New</button>

            <ul className="todo-list">
              {todos.map((todo) => (
                <li key={todo.id} className="todo-item">
                  {todo.content}
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
