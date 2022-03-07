const {DataTypes} =require('sequelize');

module.exports=(sequelize) =>{
    sequelize.define('clients', {
        id: {
            type: DataType.INTERGER,
            allowNull: false,
            primaryKey: true,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}