import client from "../config/redis.js";

export const invalidateBlogsCache = async () => {
  try {
    // Clear all AIT blogs cache
    const keys = await client.keys("ait_blogs:*");
    if (keys.length > 0) {
      await client.del(keys);
      console.log(` Cleared ${keys.length} Upstash cache keys`);
    }
  } catch (error) {
    console.error("Upstash cache invalidation failed:", error);
  }
};
