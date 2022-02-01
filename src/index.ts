import { Express } from 'express';
import { Server } from 'http';

export async function expressListenPromise(
  app: Express,
  port: number,
  hostname?: string
) {
  const listenOptions = [port, ...(hostname != null ? [hostname] : [])];
  return new Promise<Server>((resolve, reject) => {
    const server = app
      .listen(...(listenOptions as any[]), () => {
        resolve(server);
      })
      .on('error', (err) => reject(err));
  });
}
