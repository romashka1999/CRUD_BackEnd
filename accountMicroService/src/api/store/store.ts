import { RedisStoreClient } from './redis/redis-client';
import deotenv from 'dotenv';
deotenv.config();

export enum StoreType {
    Redis
}

export interface Store {
    set(key: string, value: any): Promise<boolean>;
    expire(key: string, time: number): Promise<boolean>;
    delete(key: string): Promise<boolean>;
    get(key: string): Promise<any>;
}

export class StoreFactory {
    public static create(type: StoreType): Store {
        if (type === StoreType.Redis) {
            return new RedisStoreClient(process.env.REDIS_HOST, Number.parseInt(process.env.REDIS_PORT));
        }
        return null;
    }
}

const storeClient = StoreFactory.create(StoreType.Redis);
export { storeClient };







