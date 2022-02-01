import express from 'express';
import { expressListenPromise } from '../src/index';
describe('express listen', () => {
  it('listens', async () => {
    const app = express();
    const server1 = await expressListenPromise(app, 9000);
    const server2 = await expressListenPromise(app, 9001, 'localhost');
    server1.close();
    server2.close();
  });
});
