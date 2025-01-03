# Logger Documentation

## Overview
The `Logger` class is a flexible logging utility designed to work in both frontend (browser) and backend (Node.js) environments. It supports customizable message formatting, dynamic placeholders, and environment-specific features such as colorized output and file writing.

---

## Features

1. **Logging Levels**: Supports various log levels:
   - `info`
   - `warn`
   - `error`
   - `debug`
   - `trace`

2. **Dynamic Placeholders**:
   - `:length`: Replaced with the length of the message.
   - `:line`: Replaced with the line number of the code that invoked the logger.

3. **Environment Detection**:
   - Automatically adjusts behavior for frontend (browser) or backend (Node.js).

4. **Customizable Configuration**:
   - Prefix and suffix for log messages.
   - Option to include or exclude timestamps.
   - Minimum log level filtering.
   - Keyword-based message filtering.

5. **Colorized Output**:
   - Uses ANSI escape codes in Node.js.
   - Applies CSS styles in the browser.

6. **File Logging (Node.js)**:
   - Optionally writes logs to a file.

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

### Configuring the Logger
```javascript
logger.configure({
    prefix: '[MyApp]',
    suffix: '---END---',
    showDate: true,
    minLogLevel: 'DEBUG',
    logFilePath: 'logs.txt', // Node.js only
});
```

### Logging Messages
```javascript
logger.info("This is an info message with length: :length and line: :line");
logger.warn("Warning! Check the details: :length");
logger.error("An error occurred at line :line");
logger.debug("Debugging at line :line with length :length");
```

### Retrieving Message Counts
```javascript
console.log("Message counts:", logger.getMessageCounts());
```

---

## API Reference

### Methods

#### `configure(config: object): void`
Configures the logger.

**Parameters:**
- `config.prefix` (string): Text to prepend to all log messages.
- `config.suffix` (string): Text to append to all log messages.
- `config.showDate` (boolean): Whether to include the current timestamp.
- `config.minLogLevel` (string): Minimum log level to display (e.g., "INFO", "DEBUG").
- `config.logFilePath` (string): Path to the log file (Node.js only).

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

#### `getMessageCounts(): Record<string, number>`
Returns an object containing the count of each type of log message.

#### `formatMessage(message: string): string`
Formats a message by replacing dynamic placeholders (`:length`, `:line`).

---

## Examples

### Example 1: Basic Logging
```javascript
logger.info("Application started");
logger.warn("Low memory warning");
logger.error("An unexpected error occurred");
```

### Example 2: Using Dynamic Placeholders
```javascript
logger.debug("Processing request of length :length at line :line");
```

### Example 3: File Logging (Node.js Only)
```javascript
logger.configure({ logFilePath: 'logs.txt' });
logger.info("This will be saved to a file");
```

---

## Compatibility

### Frontend (Browser)
- Colorized output using CSS styles.
- Dynamic message formatting.

### Backend (Node.js)
- Colorized output using ANSI escape codes.
- File logging capability.
- Dynamic message formatting.

---

## Future Enhancements
- Add support for additional dynamic placeholders.
- Enable log rotation for file-based logging.
- Integrate with external logging services.

---

## License
MIT License

