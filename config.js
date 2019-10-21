
//use the value stored in the environment otherwise use the default one
exports.config = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3307,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "usbw",
  database: process.env.DB_DATABASE || "oktob",
  connectionLimit: 100
};
