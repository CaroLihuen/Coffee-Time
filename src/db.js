const {Sequelize} =require('sequelize');
const fs = require('fs');
const path=require('path');
const sequelize = require('sequelize');

const moderlDefiners =[];

fs.readdirSync(path.join(__dirname,'/models'))
 .filter((file) =>(file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
 .forEach((file) => {(
     moderlDefiners.push(require(path.join(__dirname,'/models', file))))
 });

 moderlDefiners.forEach(model => model(sequelize));
 let entries = Object.entries(sequelize.models);
 let capsEntries =entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
 sequelize.models =Object.fromEntries(capsEntries);

 const {Products, Clients} = sequelize.models;

 Products.belongsToMany(Clients, {through: ''})
