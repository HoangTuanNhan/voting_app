import DotENV from 'dotenv';

DotENV.config();

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
};