module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    name: DataTypes.STRING,
  }, {});
  State.associate = () => {
    // associations can be defined here
  };
  return State;
};
