import * as constants from "./constants";

const config = {
  ENV: process.env.NODE_ENV || "development",
  API_URL: process.env.API_URL || "http://localhost:5000",
  ...constants,
};

export default config;
