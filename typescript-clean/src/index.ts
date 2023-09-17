import express from "express";
import router from "./control/route";

const app = express();

app.use(express.json());
app.use("/", router);

app.listen(3000,()=>{
    console.log("server run in port 3000");
});

;