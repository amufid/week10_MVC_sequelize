const hashPassword = require('../lib/bcrypt.js');
const UserService = require('../services/userService.js');

class UserController {

   static findAll = async(req, res, next) => {
      try {
         const users = await UserService.findAll(req.query);

         res.status(200).json(users)
      } catch (err) {
         next(err);
      }
   }

   static findOne = async(req, res, next) => {
      try {
         const user = await UserService.findOne(req.params.id);

         res.status(200).json({data: user})
      } catch (err) {
         next(err);
      }
   }

   static create = async(req, res, next) => {
      try {
         const {email, password, role, gender} = req.body
         const user = await UserService.create(email, password, role, gender);

         res.status(200).json({
            message: 'User added successfully',
            data: user
         })
      } catch (err) {
         next(err);
      }
   }

   static update = async(req, res, next) => {
      try {
         const params = {
            id: req.params.id,
            body: req.body
         }

         await UserService.update(params);

         res.status(200).json({message: 'User updated successfully'})
      } catch (err) {
         next(err);
      }
   }

   static destroy = async(req, res, next) => {
      try {
         await UserService.destroy(req.params.id);

         res.status(200).json({message: 'User deleted successfully'});
      } catch (err) {
         next(err);
      }
   }
}

module.exports = UserController