'use strict';
const bcrypt = require("bcrypt")

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [      
        {
          name: 'hendri admin',
          email: 'admin@gmail.com',
          password: await bcrypt.hash("123456", 10), //setup with bcrypt encrypt
          role:"admin",
          createdAt: new Date(),
          updatedAt : new Date()
        },
        {
          name: 'hendri super admin',
          email: 'superadmin@gmail.com',
          password: await bcrypt.hash("123456", 10), //setup with bcrypt encrypt
          role:"superadmin",
          createdAt: new Date(),
          updatedAt : new Date()
        },
        {
          name: 'hendri member',
          email: 'member@gmail.com',
          password: await bcrypt.hash("123456", 10), //setup with bcrypt encrypt
          role:"member",
          createdAt: new Date(),
          updatedAt : new Date()
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};