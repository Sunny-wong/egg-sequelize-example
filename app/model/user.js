'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define('User', {
//     first_name: DataTypes.STRING,
//     last_name: DataTypes.STRING,
//     email: DataTypes.STRING
//   }, {
//     underscored: true,
//   });
//   User.associate = function(models) {
//     // associations can be defined here
//   };
//   return User;
// };

module.exports = app => {
  const { Model, STRING } = app.Sequelize;
  class User extends Model {}
  User.init({
    firstName: STRING,
    lastName: STRING,
    email: STRING,
  }, {
    sequelize: app.model,
  });

  return User;
};
