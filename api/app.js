const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());
const users = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/user.json`));
const date = new Date();

app.get("/", (req, res) => {
  res.status(200).json({
    ok: "true",
    message:
      "Welcome to users api. Append the above link with /api/v1/users  for further data",
  });
});
app.get("/:something?", (req, res) => {
  res.status(404).json({
    ok: "false",
    message: "Invalid api address",
  });
});

app.get("/api/v1/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/api/v1/users/:id", (req, res) => {
  const id = `${req.params.id}`;
  const members = users.members;
  const user = members.filter((el) => el.id === id);
  if (!user.length) {
    return res.status(404).json({
      ok: "false",
      message: "Invalid Id",
    });
  }
  res.status(200).json({
    ok: "true",
    member: user,
  });
});

app.listen(process.env.PORT || 4200, () => {
  console.log(`Server started successfully`);
});
