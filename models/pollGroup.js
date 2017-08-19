module.exports = function(sequelize, DataTypes) {
    var Pollgroup = sequelize.define("pollgroup", {
        poll_id: DataTypes.INTEGER,
        poll_user_id: DataTypes.INTEGER

    });


    Pollgroup.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Pollgroup.belongsTo(models.placespoll, {
            foreignKey: {
                allowNull: false
            }
        });

        Pollgroup.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Pollgroup;
};