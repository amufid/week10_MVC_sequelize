'use strict';

const fs = require('fs');

let data = fs.readFileSync('./movies.json', 'utf8');

data = JSON.parse(data).map((element)=>{
  return{
    title: element.title,
    genre: element.genre,
    year: element.year,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Movies', data, {})

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete("Movies", null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
