import express from "express";
const bodyParser = require('body-parser');
import router from "./control/route";
import Database from "./model/Database";

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.listen(3000,()=>{
    console.log("server run in port 3000");
});

const db = Database.getInstance();
db.connected();