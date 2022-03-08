const { DataTypes }= require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('products' ,{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description : {
            type: DataTypes.STRING,
            allowNull: false
        },
        image : {
            type: DataTypes.STRING,
            validate: {
                isUrl:true
            }
        },
        score: {
            type: DataTypes.INTEGER,
        },
    })
};