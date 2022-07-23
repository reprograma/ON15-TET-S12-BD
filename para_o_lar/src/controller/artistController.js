
const userSchema = require("../model/artistModel");

exports.createArtist = async (req, res) => {

const newArtist = new userSchema(req.body);
const savedUser = await newArtist.save();
return res.status(201).send(savedUser)

}

exports.updateArtist = async(req, res) => {

const updatedArtist = await userSchema.findByIdAndUpdate(req.params.id, req.body)
res.status(200).send (updatedArtist)

}

exports.getAllArtist = async(req, res) => {

const allArtist = await userSchema.find(req.query)
res.status(200).send(allArtist)
}

exports.buscarArtist = async(req, res) => {
const findArtist = await userSchema.findById(req.params.id)
reres.status(200).send(this.buscarArtist)

}