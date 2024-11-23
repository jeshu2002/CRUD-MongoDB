const Taskmodel = require("../models/Taskmodel");

module.exports.getTask = async (req,res) => {
    const tasks = await Taskmodel.find();
    res.send(tasks);
    
};


module.exports.saveTask = (req,res) => {
    const {task} = req.body;

    Taskmodel.create({task})
    .then((data) => {
        console.log("Saved Successfully..");
        res.status(201).send(data);
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong! "} );
    });
    
};


module.exports.updateTask = (req,res) => {
    const {id} = req.params;
    const {task} = req.body;

    Taskmodel.findByIdAndUpdate(id, {task})
    .then(() => res.send("Task was updated.."))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong! "} );
    });
    
};


module.exports.deleteTask = (req,res) => {
    const {id} = req.params;

    Taskmodel.findByIdAndDelete(id)
    .then(() => res.send("Task was deleted successfully.."))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong! "} );
    });
};