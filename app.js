import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Usuario "demo" en memoria
const USER = { username: "admin", password: "123456" }; // contraseña débil para DEMO

// Página de login
app.get("/", (req, res) => {
  res.send(`
    <h2>Login Demo</h2>
    <form method="POST" action="/login">
      <input name="username" placeholder="Usuario" /><br/>
      <input name="password" type="password" placeholder="Contraseña" /><br/>
      <button type="submit">Entrar</button>
    </form>
  `);
});

// Endpoint login (sin protección = vulnerable a fuerza bruta)
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    return res.send(`<h3>✅ Bienvenido ${username}</h3>`);
  }
  return res.send("<h3>❌ Usuario o contraseña incorrecta</h3>");
});

app.listen(3000, () => console.log("Demo en http://localhost:3000"));
