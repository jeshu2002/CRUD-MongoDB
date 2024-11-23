const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

const PORT = 7001;

const routes = require("./routes/taskRoute");

app.use(express.json());
app.use(cors());
app.use("/api",routes);
// app.get("/", (req,res)=> {
//     res.send("hello");
// });

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const infoRoutes = require('./routes/infoRoutes');

app.use('/api', infoRoutes);

const contactinfo = require('./routes/contactRoutes');

app.use('/api', contactinfo);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));