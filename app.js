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
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

//mongoose.connect('mongodb+srv://giuseppi:supersecretpassword@cluster0.yaes3td.mongodb.net/tuiter?retryWrites=true&w=majority');

const app = express()
app.use(cors())
app.use(express.json());


HelloController(app)
UsersController(app)
TuitsController(app)
app.listen(process.env.PORT ||4000)