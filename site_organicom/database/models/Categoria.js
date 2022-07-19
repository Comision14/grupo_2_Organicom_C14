"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categoria.hasMany(models.Producto, {
        as: "productos",
        foreignKey: "categoriaId",
      });
    }
  }
  Categoria.init(
    {
      nombre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Categoria",
      tableName: "Categorias",
    }
  );

  return Categoria;
};