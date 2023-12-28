import server from "./server";
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });
server.start();