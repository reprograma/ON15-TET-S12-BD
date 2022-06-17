const cartoonModel = require('../models/cartoonModel')

const createCartoon = async (req, res) => {
  const {
    name,
    seriesName,
    creation,
    animator,
    category,
    age,
    images,
    movie
  } = req.body

  if (!name) {
    return res.status(400).json({
      message: 'The name cannot be empty!'
    })
  }

  try {
    const newCartoon = new cartoonModel({
      name: name,
      seriesName: seriesName,
      creation: creation,
      animator: animator,
      category: category,
      age: age,
      images,
      movie
    })
    const savedCartoon = await newCartoon.save()
    res.status(201).json(savedCartoon)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const findAllCartoon = async (req, res) => {
  try {
    const AllCartoon = await cartoonModel.find()
    res.status(200).json(AllCartoon)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })

  }
}

const findById = async (req, res) => {
  try {
    const cartoonById = await cartoonModel.findById(req.params.id)
    res.status(200).json(cartoonById)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })

  }
}

const findCartoonByName = async (req, res) => {
      try {
        const cartoonByName = await cartoonModel.findOne({
          name: new RegExp(req.query.name, 'i')
        })
        res.status(200).json(cartoonByName)
      } catch (error) {
        res.status(500).json({
          message: error.message
        })
      }
    }
      module.exports = {
        createCartoon,
        findAllCartoon,
        findById,
        findCartoonByName
      }