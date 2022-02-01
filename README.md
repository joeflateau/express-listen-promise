# express-listen-promise

This package wraps Express#listen to give you a promise interface.

## Usage

```ts
import { expressListenPromise } from 'express-listen-promise';

const app = express();
const server1 = await expressListenPromise(app, 9000);
const server2 = await expressListenPromise(app, 9001, 'localhost');
server1.close();
server2.close();
```
