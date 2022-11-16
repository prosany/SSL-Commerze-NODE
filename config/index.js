import dotenv from "dotenv";
dotenv.config();

const config = {};
config.PORT = process.env.PORT || 5040;
config.STORE_ID = process.env.STORE_ID;
config.STORE_PASS = process.env.STORE_PASS;
config.STORE_MODE = process.env.STORE_MODE;

export default config;
