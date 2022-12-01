import express from 'express'
import HelloController
    from "./controllers/hello-controller.js"
import UsersController from "./controllers/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from "cors";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);

//mongoose.connect('mongodb+srv://giuseppi:<supersecretpassword>@cluster0.yaes3td.mongodb.net/?retryWrites=true&w=majority');

const app = express()
app.use(cors())
app.use(express.json());


HelloController(app)
UsersController(app)
TuitsController(app)
app.listen(process.env.PORT ||4000)