import { createContext, useContext, useState } from "react";

import "./App.css";
const MyContext = createContext(0);

function App() {
  const [formValues, setFormValues] = useState();
  const [message, setMessage] = useState("");
  const [messageClass, setMessageClass] = useState("");


  function handleChange(e) {
    setFormValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Formulario enviado con los valores:", formValues);
    try {
      const response = await fetch("http://localhost:3002/loginjs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formValues.name,
          password: formValues.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful!");
        setMessageClass("success"); // Cambia la clase a 'success'

        /*   messageDiv.classList.add("success");
      messageDiv.classList.remove("error"); */
      } else {
        setMessage("Login failed: " + (data.message || "Invalid credentials"));
        setMessageClass("error");

        /*   messageDiv.classList.add("error");
      messageDiv.classList.remove("success"); */
      }
    } catch (error) {
      setMessage("An error occurred: " + error.message);
      setMessageClass("error");

      /*   messageDiv.classList.add("error");
    messageDiv.classList.remove("success"); */
    }
  }
  return (
    <>
      <h1>Vite + React</h1>
      <MyContext.Provider value={messageClass}>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div id="formName">
            <label htmlFor="inputName">Name:</label>
            <input
              type="text"
              id="inputName"
              name="name"
              placeholder="Name"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div id="formPassword">
            <label htmlFor="inputPassword">Password:</label>
            <input
              type="password"
              id="inputPassword"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button id="btnSend" type="submit">
            Send
          </button>
          <Message message={message}/>
        </form>
      </MyContext.Provider>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Message({message}) {
  let messageClass = useContext(MyContext);
  return (
    <div id="message" className={`message ${messageClass}`}>
      status: {message}
    </div>
  );
}

export default App;
