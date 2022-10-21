'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Cars', [      
        {
          name: 'Lamborgini',
          price: '200000',
          size: 'large',
          available:true,
          createdBy:'superadmin',
          createdAt: new Date(),
          updatedAt : new Date()
        },
        {
          name: 'Aventador',
          price: '200000',
          size: 'medium',
          available:true,
          createdBy:'superadmin',
          createdAt: new Date(),
          updatedAt : new Date()
        },
        {
          name: 'Ferrari',
          price: '200000',
          size: 'small',
          available:true,
          createdBy:'superadmin',
          createdAt: new Date(),
          updatedAt : new Date()
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};