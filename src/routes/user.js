const express = require('express')
const router = express.Router();
const userSchema = require("../models/user");

// crear usuario 
router.post("/users",(req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//obtener todos los usuarios
router.get("/users",(req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
//mostrar usuario especifico
router.get("/users/:id",(req, res) => {
    const {id} = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
//Actualizar usuario
router.put("/users/:id",(req, res) => {
    const {id} = req.params;
    const {name, apellido, email, telefono} = req.body;
    userSchema
    .updateOne({_id : id}, {$set: {name, apellido, email,telefono}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
//Eliminar usuario
router.delete("/users/:id",(req, res) => {
    const {id} = req.params;
    userSchema
    .deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});




module.exports = router