import client from "../config/redis.js";

export const cacheMiddleware = (duration = 3600) => {
  return async (req, res, next) => {
    const cacheKey = `ait_blogs:${req.originalUrl}`; 

    try {
      // Check Upstash cache
      const cachedData = await client.get(cacheKey);
      if (cachedData) {
        console.log(`✅ UPSTASH CACHE HIT: ${cacheKey}`);
        res.set("X-Cache", "HIT");
        return res.status(200).json(JSON.parse(cachedData));
      }
    } catch (error) {
      console.warn(`Cache MISS (${req.originalUrl}):`, error.message);
    }

    // Store in cache
    const originalJson = res.json;
    res.json = function (data) {
      if (data?.success === true) {
        client
          .setEx(cacheKey, duration, JSON.stringify(data))
          .then(() => console.log(`✅ UPSTASH CACHE SET: ${cacheKey}`))
          .catch((err) => console.warn("Cache SET failed:", err));
      }
      return originalJson.call(this, data);
    };

    res.set("X-Cache", "MISS");
    next();
  };
};
