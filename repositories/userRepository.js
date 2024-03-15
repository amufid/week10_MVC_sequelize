const { User } = require('../models');

class UserRepository {

   static findAll = async (params) => {
      try {
         const users = await User.findAll(params)

         return users;
      } catch (err) {
         throw err;
      }
   }

   static findOne = async (params) => {
      try {
         const user = await User.findOne(params);

         return user;
      } catch (err) {
         throw err;
      }
   }

   static create = async (email, password, role, gender) => {
      try {
         const user = await User.create({ email, password, role, gender })

         return user;
      } catch (err) {
         throw err;
      }
   }

   static update = async (id, body) => {
      try {
         const user = await User.findOne({
            where: { id }
         })

         if (!user)
            throw { name: 'ErrorNotFound', message: 'User not found' };

         await user.update(body);
      } catch (err) {
         throw err;
      }
   }

   static destroy = async (params) => {
      try {
         const user = await User.findOne(params);

         if (!user)
            throw { name: 'ErrorNotFound', message: 'User not found' };

         await user.destroy();
      } catch (err) {
         throw err;
      }
   }
}

module.exports = UserRepository;