import Redis from "ioredis"
import dotenv from "dotenv";

dotenv.config();
// redis is a key-value store, so we can say is like a huge json
export const redis = new Redis(process.env.UPSTASH_REDIS_URL);
// await client.set('foo', 'bar');