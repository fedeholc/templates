import express from "express";
import cors from "cors";

const app = express();
const port = 3002;

// Configurar CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes POST
app.use(express.urlencoded({ extended: true })); // Para datos de formularios (application/x-www-form-urlencoded)
app.use(express.json()); // Para poder usar datos en formato JSON

app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;

  console.log("Name:", name);
  console.log("Password:", password);

  res.send("Welcome to the login page! " + name + " " + password);
});

app.post("/loginjs", (req, res) => {
  const { name, password } = req.body;

  console.log("Name:", name);
  console.log("Password:", password);

  if (name === "admin" && password === "1234") {
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        username: "admin",
        role: "administrator",
      },
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }
  res.send();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
