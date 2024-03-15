const MovieService = require("../services/movieService.js");

class MovieController {
   static findAll = async (req, res, next) => {
      try {
         const movies = await MovieService.findAll(req.query);

         res.status(200).json(movies);
      } catch (err) {
         next(err);
      }
   };

   static findOne = async (req, res, next) => {
      try {
         const movie = await MovieService.findOne(req.params.id);
         res.status(200).json({
            data: movie,
         });
      } catch (err) {
         next(err);
      }
   };

   static create = async (req, res, next) => {
      try {
         const movie = await MovieService.create(req.body);

         res.status(200).json({
            message: "Movie added successfully",
            data: movie,
         });
      } catch (err) {
         next(err);
      }
   };

   static uploads = async (req, res, next) => {
      try {
         const url = await MovieService.uploads(req.file);

         res.status(201).json({
            message: "Upload successfully",
            image_url: url,
         });
      } catch (err) {
         next(err);
      }
   };

   static update = async (req, res, next) => {
      try {
         const params = {
            id: req.params.id,
            body: req.body
         }

         await MovieService.update(params);

         res.status(200).json({ message: 'Movie updated successfully'})
      } catch (err) {
         next(err);
      }
   };

   static destroy = async (req, res, next) => {
      try {
         await MovieService.destroy(req.params.id)

         res.status(200).json({message: 'Movie deleted successfully'})
      } catch (err) {
         next(err);
      }
   };
}

module.exports = MovieController;
