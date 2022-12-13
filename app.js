import express from 'express'
import HelloController
    from "./controllers/hello-controller.js"
import UsersController from "./controllers/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from "cors";


const PORT = process.env.PORT || 4000

const app = express()
app.use(cors())
app.use(express.json());


HelloController(app)
UsersController(app)
TuitsController(app)
app.listen(PORT,(error) =>
    {

        console.log("Server running on PORT: " + PORT);
        console.log({error})
    }


)