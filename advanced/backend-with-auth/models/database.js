const Sequelize = require('sequelize');
const sequelize = new Sequelize('graphql', 'postgres', 'admin', {
  dialect: 'postgres',
  define: {
    timestamps: false
  },
  logging: false,
});

module.exports = {
  sequelize
};