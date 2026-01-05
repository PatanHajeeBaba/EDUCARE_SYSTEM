import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";

function LoginRegistration({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      navigate("/");
    }
  }, [navigate]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ username: "", email: "", password: "" });
    setError("");
    setSuccess("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      console.log("Login successful! Redirecting...");
      setError("");
      onLogin();
      setTimeout(() => navigate("/"), 1000);
    } else if(storedUsers == "" ){
      setError("User not exist")
    } else{
      setError("Invalid email or password.");
      setSuccess("");
    } 

  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setError("All fields are required!");
      setSuccess("");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = storedUsers.some((user) => user.email === email);

    if (emailExists) {
      setError("Email already exists!");
      setSuccess("");
      return;
    }

    const newUser = { username, email, password };
    localStorage.setItem("users", JSON.stringify([...storedUsers, newUser]));
    console.log("Registration successful! Please log in.");
    setError("");
    toggleForm();
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="btn-submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p className="toggle-link">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={toggleForm}>
            {isLogin ? "Register here" : "Login here"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginRegistration;

