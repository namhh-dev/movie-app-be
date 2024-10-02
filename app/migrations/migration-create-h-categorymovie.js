module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('category_movie', {
        cat_mov_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        mov_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'movies',
            key: 'mov_id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        cat_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'categories',
            key: 'cat_id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
      },{
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('category_movie');
    },
  };
  