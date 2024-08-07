//definir las rutas atravez de las cuales nos popdemos comunicar

const {Router}= require ("express");
const {movies, create }  = require("../controllers");
// const { createMovie } = require("../service/movieService");


const router= Router ();

router.get("/movies",movies);
router.post("/movies" ,create);
// router.post("/movies" ,(req,res)=>{

// });

module.exports = router;