import mysql from "mysql";
import express from "express";

const pool = mysql.createPool({
    port: 3306,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

const port = process.env.SERVER_PORT || 8000;
const app = express();
app.listen(port, () => {
    console.log(`Demo app listening at https://arcanaidora.com:${port}`);
});