const App = require('./app');
require('dotenv').config();

const PORT = 3000;
const HOST = '0.0.0.0';

App.server.listen(PORT, HOST);