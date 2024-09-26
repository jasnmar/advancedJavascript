/*
Challenge:
    1. Curry this function!
    Set up three partially applied functions called 'infoLogger', 
    'warnLogger', and 'errorLogger'. 
    The partially applied functions should have their level ('info', 
    'warn', 'error'). 
    You should be able to call these functions and pass in a message.
    E.g. console.log(warnLogger("Low disk space")) would log: "[WARN] Low disk space".
    🛟 hint.md for help.
*/
const logMessage = (level, message) => `[${level.toUpperCase()}] ${message}`
const logger = (level) => (message) => `[${level.toUpperCase()}] ${message}`

// Log messages with "info" level
const infoLogger = logger("info")
console.log(infoLogger("Application started"))
console.log(infoLogger("User logged in"))
// Log messages with "warn" level
const warnLogger= logger("warn")
console.log(warnLogger("Low disk space")) // Output: "[WARN] Low disk space"
console.log(warnLogger("High memory usage")) // Output: "[WARN] High memory usage"

// Log messages with "error" level
const errorLogger = logger("error")
console.log(errorLogger("Unhandled exception"))
console.log(errorLogger("Failed to save file"))