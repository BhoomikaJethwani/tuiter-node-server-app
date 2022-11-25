import posts from "./tuits.js";
let tuits = posts;


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const findTuits = (req, res) => {
    res.json(tuits);
}

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.topic = "Space";
    newTuit.handle = "@Nasa";
    newTuit.time = "2h";
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/918px-NASA_logo.svg.png";
    newTuit.liked = false;

    tuits.push(newTuit);
    res.json(newTuit);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params['tid'];
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id.toString() === tuitdIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}


const deleteTuit = (req, res) => {
    const tuitIdToDelete = req.params['tid'];
    tuits = tuits.filter((
        t) =>
        t._id.toString() !== tuitIdToDelete);
    res.sendStatus(200);
}
