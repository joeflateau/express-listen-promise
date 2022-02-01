import { Express } from 'express';
import { Server } from 'http';

export type ListenOptions = [port: number, hostname: string] | [port: number];

export async function expressListenPromise(
  app: Express,
  ...options: ListenOptions
) {
  return new Promise<Server>((resolve, reject) => {
    const server = app
      .listen(...(options as any[]), () => {
        resolve(server);
      })
      .on('error', (err) => reject(err));
  });
}
