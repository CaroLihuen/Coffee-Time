const { DataTypes } =require('sequelize');

module.exports=(sequelize) => {
    sequelize.define('products' ,{
        id: {
            type: DataType.INTERGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price : {
            type: DataTypes.STRING,
            allowNull: false
        },
        description : {
            type: DataTypes.STRING,
            allowNull: false
        },
        img : {
            type: DataTypes.STRING,
        },
        points: {
            type: DataTypes.STRING,
        },
    })
};