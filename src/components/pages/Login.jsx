import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Hardcoded user data for demonstration purposes
    const users = [
      {
        username: "MartinLDino",
        password: "password1",
        name: "Martin L. Dino",
      },
      {
        username: "JacquelineRose",
        password: "password2",
        name: "Jacqueline Rose C.",
      },
      { username: "QueJustine", password: "password3", name: "Que Justine" },
    ];

    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/dashboard">
        <button onClick={handleLogin}>Login</button>
      </Link>

      {error && <p>{error}</p>}
    </div>
  );
};

const LoginSystem = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? <Link to="/dashboard"></Link> : <Login setUser={setUser} />}
    </div>
  );
};

export default LoginSystem;
