const Redis = require("ioredis");

// api --- work_api1work_api1
// key --- A2j86fmskmgjplyjocebxw9ao56llxaj0hecmbwk9vt22iwijo9

const redis = new Redis({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
  username: process.env.REDIS_USER || "work_redis1",
  password: process.env.REDIS_PASSWORD || "Taras777999$Taras777999$",
});

redis.connect(() => console.log('Redis connected'))

module.exports = redis
