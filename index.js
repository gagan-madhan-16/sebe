const express = require("express");
const app = express();
const rootRouter = require("./routes/index");
require("dotenv").config();

const cors = require("cors");


app.use(cors());

app.use(express.json());

app.use("/api/v1", rootRouter);

const port = process.env.PORT;

app.listen(port,()=>{
  console.log(`running on port ${port}`);
  
});
