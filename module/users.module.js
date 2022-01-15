module.exports = (sequelize, Sequelize) => {
    const signtbl = sequelize.define("signtbl", {
 
      email: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
    },
    {
      freezeTableName: true
    });
  
    return signtbl;
  };
  