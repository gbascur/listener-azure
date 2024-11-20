import { createLogger, transports, format } from "winston";
import  moment from "moment-timezone";

export const logger = createLogger({
    transports: new transports.Console({
      level: process.env.LOG_LEVEL_CONSOLE || "info",
      handleExceptions: true,
      format: format.colorize({ all: true }),
    }),
    format: format.combine(
      format.colorize({ all: true }),
      format.splat(),
      format.metadata(),
      format.timestamp(),
      format.printf(
        (msg) => `${moment().format()} - ${msg.level}: ${msg.message}`
      )
    ),
  });