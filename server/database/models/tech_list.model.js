module.exports = (Sequelize, connector) => {
    const Tech_list = connector.define(
      "tech_list",
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false
        }
      },
      { freezeTableName: true, timestamps: false }
    );
  
    return Tech_list;
  };