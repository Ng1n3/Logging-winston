require("./loggers");
const winston = require("winston");

// const { combine, timestamp, printf, json, prettyPrint, errors } = winston.format;

// const logger = winston.createLogger({
//   level: "info",
//   // format: winston.format.json(),
//   // format: winston.format.cli(),
//   format: combine(
//     errors({stack: true}),
//     timestamp(),
//     // printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
//     json(),
//     prettyPrint()
//   ),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: "server.log", level: "error" }),
//   ],
// });

// const requestLog = { method: "Get", isAuthenticated: false };
// const childLogger = logger.child(requestLog);

// // logger.info("An info log", requestLog);
// // logger.error("An error log");
// childLogger.info("An info log");
// childLogger.error("An error log", new Error('504 Gateway Timeout'));

const paymentLogger = winston.loggers.get("PaymentLogger");
const orderLogger = winston.loggers.get("OrderLogger");

// paymentLogger.info('payment received')
// orderLogger.error('Order failed')

let requestHandler = (path) => {
  const profiler = paymentLogger.startTimer();

  // requesting
  const ONE_BILLION = 1000000000;
  for (let i = 0; i < ONE_BILLION; i++) {
    j = i * 2;
  }

  profiler.done({ message: `Request to ${path} processed` });
};

requestHandler("/payment");
