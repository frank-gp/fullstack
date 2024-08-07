export const validateMovie = (req, res, next) => {
  const { id } = req.params;
  console.log("middleware validateMovie", typeof id);
  if (+id > 10) return next();
  console.log("entró aca");
  res.status(404).json({ error: "Movie not found" });
};
