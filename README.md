# @kkmb/logger

A simple logging for server side js

## Installation

```bash
npm install @kkmb/logger
```

## Usage

- Commonjs

```js
const {Logger} = require( '@kkmb/logger');
const log = new Logger();
log.info("This is info log !");
log.error("This is error log !");
log.warn("This is warning log !");
log.debug("This is debug log !");
log.trace("This is trace log !");
```

- ESM

```js
import {Logger} from '@kkmb/logger';
const log = new Logger();
log.info("This is info log !");
log.error("This is error log !");
log.warn("This is warning log !");
log.debug("This is debug log !");
log.trace("This is trace log !");
```