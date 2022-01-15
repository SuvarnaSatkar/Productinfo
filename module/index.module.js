const Sequelize=require('sequelize');
const sequelize = new Sequelize('productdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  sequelize.authenticate().then(()=>{
    console.log('connected')
  }).catch(err=>{
    console.log("not connected with DB");
  })

const db={};
db.sequelize=sequelize;
db.Sequelize=Sequelize;
db.signtbl= require('./users.module')(sequelize,Sequelize);

module.exports=db;
