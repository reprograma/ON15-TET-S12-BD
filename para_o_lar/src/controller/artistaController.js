const UserSchema = require("../models/artistasModel");

exports.createArtista = async ( req, res) => {
  
    const newArtista = new UserSchema(req.body);
    const savedUser = await newArtista.save();
    return res.status(201).send(savedUser )
  
}

exports.updateArtista =async (req, res) => {
    const updatedArtista = await UserSchema.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).send (updatedArtista)
}

exports.listarArtistas = async ( req, res) =>{
    const todosArtistas = await UserSchema.find(req.query)
    res.status(200).send (todosArtistas)
}

exports.buscarArtista = async (req, res) => {
    const findArtista = await UserSchema.findById(req.params.id)
    res.status(200).send (findArtista)
}