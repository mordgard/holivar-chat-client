import path from "path";
import winston from "winston";

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.label({ label: path.basename(process.mainModule.filename) }),
    winston.format.colorize(),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(
      info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
    )
  ),
  level: "debug",
  transports: [new winston.transports.Console()]
});

export { logger };
