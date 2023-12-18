import { Sequelize } from "sequelize";
import db from "../config/Database1.js";

const { DataTypes } = Sequelize;

const Profil = db.define(
  "profil1",
  {
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    email: DataTypes.STRING,
    company: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Profil;

(async () => {
  await db.sync();
})();
