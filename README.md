# Logger Documentation

## Overview
The `Logger` class is a flexible logging utility designed to work in both frontend (browser) and backend (Node.js) environments. 

---

## Features

1. **Logging Levels**: Supports various log levels:
   - `info`
   - `warn`
   - `error`
   - `debug`
   - `trace`

2. **Environment Detection**:
   - Automatically adjusts behavior for frontend (browser) or backend (Node.js).


3. **Colorized Output**:
   - Uses ANSI escape codes in Node.js.
   - Applies CSS styles in the browser.

---

## Installation
```bash
npm install @kkmb/logger
```

---

## Usage

### Importing the Logger
```javascript
const { Logger } = require('@kkmb/logger');
const logger = new Logger();
```

### Logging Messages
```javascript
logger.info("This is an info message ");
logger.warn("This is a warning message");
logger.error("This is an error message");
logger.debug("This is a debug message");
logger.trace("This is a trace message");
```

---

## API Reference


#### `info(...message: any[]): void`
Logs an informational message.

#### `warn(...message: any[]): void`
Logs a warning message.

#### `error(...message: any[]): void`
Logs an error message.

#### `debug(...message: any[]): void`
Logs a debug message.

#### `trace(...message: any[]): void`
Logs a trace message.

---

## Examples

### Example 1: Basic Logging
```javascript
logger.info("Application started");
logger.warn("Low memory warning");
logger.error("An unexpected error occurred");
```


---

## Compatibility

### Frontend (Browser)
- Colorized output using CSS styles.
- Dynamic message formatting.

### Backend (Node.js)
- Colorized output using ANSI escape codes.
- Dynamic message formatting.

---

## Future Enhancements
- Add support for additional dynamic placeholders.
- Enable log rotation for file-based logging.
- Integrate with external logging services.

---

## License
MIT License

