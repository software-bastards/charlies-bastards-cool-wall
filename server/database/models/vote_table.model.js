module.exports = (Sequelize, connector) => {
  const Vote_table = connector.define(
    "vote_table",
    {
      tech_id: {
        type: Sequelize.INTEGER,

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
