module.exports = (sequelize, DataTypes) => {
    return sequelize.define('post', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: DataTypes.STRING,
        content: DataTypes.TEXT
    }, {
        timestamps: true,
        paranoid: true,
        underscored: true
    })
}
