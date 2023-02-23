const express = require("express");
const router= express.Router();
const {getAllAnimals,
  getOneAnimalById,
  createAnimal,
  updateAnimal,
   deleteAnimal
  } = require ("../controller/animalsController")

router.get("/",getAllAnimals );
router.get("/:id",getOneAnimalById)
router.post("/",createAnimal)
router.put("/:id", updateAnimal)
router.delete("/",deleteAnimal)

module.exports =router;
