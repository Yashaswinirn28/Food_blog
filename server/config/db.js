const connectToDB = require("./connection");

const executeQuery = async (query, data) => {
  try {
    const db = await connectToDB();
    return new Promise((resolve, reject) => {
      db.query(query, data, (error, results) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  } catch (error) {
    console.error("Error in database operation:", error);
    throw error;
  }
};

module.exports = executeQuery;
