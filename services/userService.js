const UserRepository = require('../repositories/userRepository.js');
const hashPassword = require('../lib/bcrypt.js');
class UserService {

   static findAll = async (params) => {
      try {
         const users = await UserRepository.findAll(params);
         return users;
      } catch (err) {
         throw err;
      }
   }

   static findOne = async (id) => {
      try {
         const filterOptions = {
            where: { id }
         }

         const user = await UserRepository.findOne(filterOptions);

         if (!user)
            throw { name: 'ErrorNotFound', message: 'User not found' };

         return user;
      } catch (err) {
         throw err;
      }
   }

   static create = async (email, password, role, gender) => {
      try {
         const hashPass = await hashPassword(password);
         const user = await UserRepository.create(email, hashPass, role, gender);

         return user;
      } catch (err) {
         throw err;
      }
   }

   static update = async (params) => {
      try {
         const {id, body} = params;
         body.password = await hashPassword(body.password);

         await UserRepository.update(id, body);
      } catch (err) {
         throw err;
      }
   }

   static destroy = async (id) => {
      try {
         const filterOptions = {
            where: { id }
         };

         await UserRepository.destroy(filterOptions);
      } catch (err) {
         throw err;
      }
   }
}

module.exports = UserService