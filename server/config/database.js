import { Sequelize } from "sequelize";

const db = new Sequelize('temp_db','root','', {

    host: 'localhost',
    dialect: 'mysql'
});

export default db;