module.exports = function (router) {
  // Import the actor controller to handle the logic for each route
  const movieController = require("../controllers/movie.controller");

  // Define routes
  router.get("/movie", movieController.getAll);
  router.get("/movie/:id", movieController.getById);
  router.get("/latest-movie", movieController.getLatestMovies);

  router.post("/movie", movieController.insert);
  router.post("/movie-api", movieController.insertByApi);

  router.put("/movie/:id", movieController.update);

  router.delete("/movie/:id", movieController.delete);
};
