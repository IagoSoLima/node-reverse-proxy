const express = require("express");
const app = express();
const port = 3000;

const config = {
  host: "db-app",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Iago')`;
connection.query(sql);
connection.end();

app.get("/", (req, res) => {
  let listPeople = [];
  const connection = mysql.createConnection(config);
  connection.query("SELECT name FROM people;", (err, result, fields) => {
    if (err) res.send(err);
    listPeople = result;
    let responseMessage = "<h1>Full cycle</h1> <ul>";
    for (const person of listPeople) {
      responseMessage += `<li>${person.name}</li>`;
    }
    responseMessage += "</ul>";
    res.send(responseMessage);
  });
  connection.end();
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
