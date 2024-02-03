import { v4 as uuidv4 } from "uuid";

const taskModel = (sequelize, Sequelize) => {
  const Task = sequelize.define(
    "task",
    {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: uuidv4(),
      },

      creator_id: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      assignee_id: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      assigner_id: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      comment_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      is_completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      },

      labels: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
        defaultValue: [],
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      priority: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },

      section_id: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      parent_id: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      duration: {
        type: Sequelize.JSONB,
        defaultValue: null,
      },
      due: {
        type: Sequelize.JSONB,
        defaultValue: null,
      },
    },
    { timestamps: false }
  );

  return Task;
};
export default taskModel;
