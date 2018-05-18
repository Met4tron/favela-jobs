require('dotenv').config();

module.exports = {
    DB: {
        PORT: process.env.DB_PORT,
        HOST: process.env.DB_HOST,
        NAME: process.env.DB_NAME
    },
    PORT: process.env.PORT
}