const express = require("express");
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");


//Acquiring Models Schema and multer
const multer = require("./multer");
const UserSignup = require("./models/userSignupModel");
const Post = require("./models/postModel");

// Resolving Paths in express
app.use(express.static(path.resolve(__dirname, "../dist")));
app.use("/upload", express.static(path.join(__dirname, "upload")));

//parsing the json data
app.use(bodyParser.json());

//DB Connection
mongoose
    .connect(
        "mongodb://arslan:arslan@cluster0-shard-00-00-jogak.mongodb.net:27017,cluster0-shard-00-01-jogak.mongodb.net:27017,cluster0-shard-00-02-jogak.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
        { useNewUrlParser: true }
    )
    .then(() => console.log("DB Connected"))
    .catch(e => console.log("error", e));

//Sign Up API
app.post("/signup", (req, res) => {
    let user = new UserSignup(req.body);
    user.save().then(data => res.json(data));
});

app.get("/api/users", (req, res) => {
    UserSignup.find().then(data => res.json(data));
});

//Create Post API
app.post("/createpost", multer.single("image"), (req, res) => {
    console.log(req.file);
    let post = new Post({
        path: `upload/${req.file.filename}`,
        title: req.body.title,
        desc: req.body.desc,
        author: req.body.author,
        postDate: req.body.postDate
    });
    post
        .save()
        .then(data => res.json(data))
        .catch(e => console.log(e));
});

app.get("/api/posts", (req, res) => {
    Post.find().then(data => res.json(data));
});



//Server Listen
app.listen(3008, () => {
    console.log("Server i working on port 3008");
});