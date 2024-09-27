// connection.js

const mysql = require("mysql");

const connectToDB = () => {
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "foodblog",
  });

  return new Promise((resolve, reject) => {
    db.connect((err) => {
      if (err) {
        console.error("Error connecting to MySQL database:", err);
        reject(err);
      } else {
        console.log("Connected to MySQL database");
        resolve(db);
      }
    });
  });
};

module.exports = connectToDB;
