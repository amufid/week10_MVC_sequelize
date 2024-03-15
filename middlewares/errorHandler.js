const errorHandler = (err, req, res, next) => {
   console.log(err)

   if (err.name === 'MissingFile') {
      res.status(400).json({ message: 'Missing file' })
   } else if (err.name === 'ErrorNotFound') {
      res.status(404).json({ message: 'Error not found' })
   } else {
      res.status(500).json({ message: 'Internal Server Error' })
   }
}

module.exports = errorHandler