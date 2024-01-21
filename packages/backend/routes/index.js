const express = require("express");
const router = express.Router();
const Films = require('../models/FilmsModel.js');

router.get('/', async (req, res) => {
  try {
     const query =  {actor_count : {$gt : 1}}
     const pageSize = 7;
     const films = await Films.find(query)
     .limit(pageSize)
     res.json(films);

  } catch (error) {
     console.error(error)
     res.status(500).send("Server Error")
  }
})

module.exports = router