import { ClientOpts } from 'redis';
import bluebird from 'bluebird';
import { Store } from '../store';
const redis = bluebird.promisifyAll(require('redis'));

export class RedisStoreClient implements Store {

    private client: any;
    constructor(host: string, port: number) {

        const options: ClientOpts = { host, port };
        this.client = redis.createClient(options);

        console.log('redis client created');

        this.client.on('error', (err: any) => {
            console.log('Redis Error ' + JSON.stringify(err));
        });
    }

    async get(key: string): Promise<any> {
        return await this.client.hgetallAsync(key);
    }

    async set(key: string, value: any): Promise<boolean> {
        const redisData = this.flatArray(value);
        const setResult = await this.client.hmsetAsync(key, redisData);
        return setResult == 'OK';
    }

    async delete(key: string): Promise<boolean> {
        const deleteResult = await this.client.delAsync(key);
        return deleteResult == 1;
    }

    async expire(key: string, time: number): Promise<boolean> {
        const setExpirationResult = await this.client.expireAsync(key, time);
        return setExpirationResult == 1;
    }

    private flatArray (array: Array<Array<any>>): Array<any> {
        const res: any = [];
        Object.entries(array).forEach(x => res.push(x[0], x[1]));
        return res;
    }
}
