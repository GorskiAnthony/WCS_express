const express = require("express");
const PORT = 8080;
const app = express();

const users = [
  {
    id: 1,
    name: "bob",
  },
  {
    id: 2,
    name: "patrick",
  },
  {
    id: 3,
    name: "carlos",
  },
];

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
