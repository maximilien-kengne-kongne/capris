# @kkmb/capris

A simple logging for server side js

## Installation

```bash
npm install @kkmb/capris
```

## Usage

- Commonjs

```js
const {Log} = require( '@kkmb/capris');
const log = new Log();
log.info("This is info log !");
log.error("This is error log !");
log.warn("This is warning log !");
log.debug("This is debug log !");
log.trace("This is trace log !");
```

- ESM

```js
import {Log} from '@kkmb/capris';
const log = new Log();
log.info("This is info log !");
log.error("This is error log !");
log.warn("This is warning log !");
log.debug("This is debug log !");
log.trace("This is trace log !");
```