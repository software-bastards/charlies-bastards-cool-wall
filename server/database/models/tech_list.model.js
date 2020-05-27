module.exports = (Sequelize, connector) => {
  const Tech_list = connector.define(
    "tech_list",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imagepath: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  return Tech_list;
};
