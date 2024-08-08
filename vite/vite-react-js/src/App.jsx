import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [formValues, setFormValues] = useState();

  function handleChange(e) {
    setFormValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Formulario enviado con los valores:", formValues);
  }
  return (
    <>
      <h1>Vite + React</h1>
      <form id="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="inputName">Name:</label>
        <input
          type="text"
          id="inputName"
          name="name"
          placeholder="Name"
          required
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="inputPassword">Password:</label>
        <input
          type="password"
          id="inputPassword"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => handleChange(e)}
        />
        <button id="btnSend" type="submit">
          Send
        </button>
        <div id="message" className="message"></div>
      </form>
    </>
  );
}

export default App;
