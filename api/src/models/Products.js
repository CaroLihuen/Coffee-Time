import { DataTypes } from 'sequelize';

export default(sequelize) => {
    sequelize.define('Products' ,{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        img : {
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