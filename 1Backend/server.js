const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const app = express();
const cors = require("cors");


const port = process.env.PORT ||  8050;
const database_url = process.env.DATABASE_URL || 'mongodb://localhost:27017/First_Hackathon';
const connectDatabase = require('./db/connection');
// const router = require("cd-express/plugin/router");

// connection with databases
connectDatabase(database_url);
//body parser
app.use(express.json());
app.use(cors());
const train_router = require('./routers/train')
app.use(train_router);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
