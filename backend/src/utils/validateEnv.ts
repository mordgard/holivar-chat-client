import { cleanEnv, port, str } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    MONGO_PASSWORD: str(),
    MONGO_PATH: str(),
    MONGO_USER: str(),
    NODE_ENV: str(),
    SERVER_PORT: port()
  });
}

export { validateEnv };
