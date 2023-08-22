import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const product = db.define('product', {
    product_name: DataTypes.STRING,
    product_desc: DataTypes.STRING,
    product_image: DataTypes.STRING,
    product_url:DataTypes.STRING
}, {
    freezeTableName:true

});

export default product;

(async() => {
    await db.sync();
})();