module.exports = (Sequelize, connector) => {
  const Vote_table = connector.define(
    "vote_table",
    {
      tech_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "tech_list",
<<<<<<< HEAD
          key: "id",
=======
          key: "id"
>>>>>>> 4aabe3c0a9c6a71a071a75fe0fe4b8dcf794ae2d
        },
        allowNull: false,
      },
      vote_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: true }
  );

  return Vote_table;
};
