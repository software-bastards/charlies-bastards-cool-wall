module.exports = (Sequelize, connector) => {
  const Vote_table = connector.define(
    "vote_table",
    {
      tech_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "tech_list",
<<<<<<< HEAD
          key: "id"
=======
          key: "id",
>>>>>>> e072b80f6bc2445696b3f449b14e2a29cf067695
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
