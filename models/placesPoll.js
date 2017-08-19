module.exports = function(sequelize, DataTypes) {
    var Placespoll = sequelize.define("placespoll", {
        created_by: DataTypes.INTEGER
    });


    Placespoll.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Placespoll.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Placespoll;
};