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

- Commonjs

```js
const {Logger} = require( '@kkmb/logger');
const log = new Logger();

```

- ESM

```js
import {Logger} from '@kkmb/logger';
const log = new Logger();
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
logger.info("This is info log !");
logger.error("This is error log !");
logger.warn("This is warning log !");
logger.debug("This is debug log !");
logger.trace("This is trace log !");
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

