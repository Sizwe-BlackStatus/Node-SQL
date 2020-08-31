require("dotenv").config();
const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
});

const addNewVisitor = (
  visitorname,
  visitorage,
  dateofvisit,
  timeofvisit,
  assistantsname,
  comments
) => {
  pool.query(
    `INSERT INTO VISITORS (visitorname, visitorage, dateofvisit, timeofvisit, assistantsname, comments) 
    VALUES ($1,$2,$3,$4,$5,$6);`,
    [
      visitorname,
      visitorage,
      dateofvisit,
      timeofvisit,
      assistantsname,
      comments,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }

      console.log(results.rows);
    }
  );
};

const listAllVisitors = () => {
  pool.query(`SELECT id,visitorname FROM visitors;`, (error, results) => {
    if (error) {
      throw error;
    }

    console.log(results.rows);
  });
};

const deleteVisitor = (id) => {
  pool.query(`DELETE FROM visitors WHERE id = $1;`, [id], (error, results) => {
    if (error) {
      throw error;
    }

    console.log(results.rows);
  });
};

const updateVisitor = (id, assistantsname) => {
  pool.query(
    `UPDATE visitors
     SET assistantsname = $2
     WHERE id = $1
     RETURNING *;`,
    [id, assistantsname],
    (error, results) => {
      if (error) {
        throw error;
      }

      console.log(results.rows);
    }
  );
};

const viewVisitorInfo = (id) => {
  pool.query(
    `SELECT * FROM visitors
     WHERE id = $1;`,
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }

      console.log(results.rows);
    }
  );
};

const deleteAllVisitor = () => {
  pool.query(`DELETE FROM visitors;`, (error, results) => {
    if (error) {
      throw error;
    }

    console.log(results.rows);
  });
};

module.exports = {
  pool,
  addNewVisitor,
  listAllVisitors,
  deleteVisitor,
  deleteAllVisitor,
  viewVisitorInfo,
  updateVisitor,
};
