module.exports = function(sequelize, DataTypes) {
    var Placesoptions = sequelize.define("placesOptions", {
        choices: DataTypes.STRING,
        poll_id: DataTypes.INTEGER,
        created_by: DataTypes.STRING

    });


    Placesoptions.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Placesoptions.belongsTo(models.placespoll, {
            foreignKey: {
                allowNull: false
            }
        });

        Placesoptions.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Placesoptions;
};