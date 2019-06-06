module.exports = {
    db_password: process.env.DB_PASSWORD,
    db_port: process.env.DB_PORT,
    db_name: process.env.DB_NAME
};

// BELOW BLOCK FOR USE WHEN WE USE AWS FOR FINAL 
// module.exports = {
//     db_host: process.env.DB_HOST,
//     db_user: process.env.DB_USER,
//     db_password: process.env.DB_PASSWORD,
//     db_port: process.env.DB_PORT,
//     db_name: process.env.DB_NAME 
// };