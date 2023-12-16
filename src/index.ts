import { App } from "./app/App";
import dotenv from 'dotenv';

const AppClass = new App

dotenv.config();

AppClass.server.listen(process.env.SERVER_PORT);