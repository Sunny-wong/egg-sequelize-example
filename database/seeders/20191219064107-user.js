'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('User', [{
      first_name: 'wang',
      lastName: 'xiangyang',
      email: 'wang.xiangyang@cn.ricoh.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      firstName: 'wang1',
      lastName: 'xiangyang1',
      email: 'wang1.xiangyang1@cn.ricoh.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('User', null, {});
  }
};
