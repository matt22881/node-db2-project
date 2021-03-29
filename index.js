require('dotenv').config()
const PORT = process.env.PORT || 5555;

const server = require('./api/server.js');

server.listen(PORT, () => console.log(`\n --- Cars API Server is Running on port ${PORT} --- \n`));
