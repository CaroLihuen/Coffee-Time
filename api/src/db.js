import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'
dotenv.config({ silent: true }); //buscar silent property
import fs from 'fs'
import { join } from 'path';
const {
    DB_USER, DB_PASSWORD, DB_HOST,
  } = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/coffee`)

const basename = _basename(__filename);

const modelDefiners =[];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(join(__dirname,'/models'))
 .filter((file) =>(file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
 .forEach((file) => {(
     modelDefiners.push(require(join(__dirname,'/models', file))))
 });

 // Injectamos la conexion (sequelize) a todos los modelos
 modelDefiners.forEach(model => model(sequelize));
 // Capitalizamos los nombres de los modelos ie: product => Product
 let entries = Object.entries(sequelize.models);
 let capsEntries =entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
 sequelize.models =Object.fromEntries(capsEntries);


 //relacion de tablas
 const {Products, Clients} = sequelize.models;

 Products.belongsToMany(Clients, {through: 'products_clients'})
 Clients.belongsToMany(Products, {through: 'products_clients'})

 export default{
     ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
     conn: sequelize,     // para importar la conexión { conn } = require('./db.js');
 }