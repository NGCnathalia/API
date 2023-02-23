const useAnimal = require('../models/animals')

// Get all information of the database
const getAllAnimals =async  (req,res) =>{
  try {
    const listAll = await useAnimal.find({})
     res.status(200).json(listAll);
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo salio mal' })
}
};

// fillter information by Id
const getOneAnimalById =async (req,res) =>{
  const input =req.params.nombre;
  try {
    const one = await useAnimal.findById(req.params.id);
    res.status(200).json(one);
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo salio mal' })
}
};

// create new registration in database
const createAnimal = async (req,res) =>{
  try {
    const resDetail = await useAnimal.create(req.body);
    res.status(200).json(resDetail);
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo salio mal' })
}
};

// update a registration of the database
const updateAnimal = async(req,res) =>{
  try {
    const resUpdate = await useAnimal.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.status(200).json(resUpdate);
  } catch (e) {
    res.status(500)
    res.send({ error: 'Algo salio mal' })
  }
  return false;
};
// delte a registration of the data base
const deleteAnimal = async(req,res) =>{
  try {
    const resDetail = await useAnimal.findOneAndRemove({ _id: req.body.id });
    res.status(200);
    res.send("Eliminado Exitosamente");
} catch (e) {
    res.status(500)
    res.send({ error: 'Algo salio mal' })
}
};

module.exports = { getAllAnimals, getOneAnimalById, createAnimal, updateAnimal, deleteAnimal }
