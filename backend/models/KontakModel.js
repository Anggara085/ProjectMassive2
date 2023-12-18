import { Sequelize } from "sequelize";
import db from "../config/Database1.js";

const { DataTypes } = Sequelize;

const Kontak = db.define(
  "kontak",
  {
    message: {
      type: DataTypes.STRING,
      allowNull: false, // Jika Anda ingin memaksa kolom untuk tidak null
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true, // Jika Anda ingin memastikan email dalam format yang valid
      },
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Kontak;
