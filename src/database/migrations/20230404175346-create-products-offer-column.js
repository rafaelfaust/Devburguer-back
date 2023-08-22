'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.addColumn('Products', 'offer' , Sequelize.BOOLEAN)

  },
  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn('Products', 'offer')
     
  }
}
