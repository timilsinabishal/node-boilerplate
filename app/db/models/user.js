'use strict';
module.exports = function (sequelize, DataTypes) {
   let model = sequelize.define('user', {
      id: {
         type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
       firstName: {
          type: DataTypes.STRING,
           allowNull: false
       },
       lastName: {
          type: DataTypes.STRING,
           allowNull: false
       },
       email: {
          type: DataTypes.STRING,
           allowNull: false
       },
       password: {
          type: DataTypes.STRING,
           allowNull: true //can also us auth
       },
       oauthID: {
          type: DataTypes.STRING,
           allowNull: true
       }
   },{
       paranoid: true,
       freezeTableName: true
   });

   return model;
};
