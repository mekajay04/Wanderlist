module.exports = function(sequelize, DataTypes) {
    var pollVotes = sequelize.define("pollvotes", {
        created_by: DataTypes.INTEGER
    });


    pollVotes.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        pollVotes.belongsTo(models.placesOptions, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    pollVotes.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        pollVotes.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return pollVotes;
};