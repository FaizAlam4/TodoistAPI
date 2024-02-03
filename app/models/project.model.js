const projectModel = (sequelize, Sequelize) => {
  const Project = sequelize.define("project", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    parentId: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue:null
    },
    order: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    color: {
      type: Sequelize.STRING,
      defaultValue: null,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    commentCount: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    isShared: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isFavorite: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isInboxProject: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isTeamInbox: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "",
    },
    viewStyle: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "list",
    },
  });
  return Project;
};
export default projectModel;
