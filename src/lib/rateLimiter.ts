/**
 * Rate Limiter Utility
 * Client-side rate limiting for form submissions and API calls
 * Note: This is client-side only. Server-side rate limiting is still required.
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

/**
 * Check if an action is allowed based on rate limiting
 * @param key - Unique identifier for the rate limit (e.g., 'login', 'signup')
 * @param maxRequests - Maximum number of requests allowed
 * @param windowMs - Time window in milliseconds
 * @returns true if allowed, false if rate limited
 */
export function checkRateLimit(
  key: string,
  maxRequests: number = 5,
  windowMs: number = 60000 // 1 minute default
): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now > entry.resetTime) {
    // Create new entry or reset expired entry
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs
    });
    return true;
  }

  if (entry.count >= maxRequests) {
    // Rate limited
    return false;
  }

  // Increment count
  entry.count++;
  return true;
}

/**
 * Get remaining time until rate limit resets (in seconds)
 */
export function getRateLimitResetTime(key: string): number {
  const entry = rateLimitStore.get(key);
  if (!entry) return 0;
  
  const remaining = Math.max(0, entry.resetTime - Date.now());
  return Math.ceil(remaining / 1000);
}

/**
 * Clear rate limit for a key
 */
export function clearRateLimit(key: string): void {
  rateLimitStore.delete(key);
}

/**
 * Clear all rate limits (useful for logout)
 */
export function clearAllRateLimits(): void {
  rateLimitStore.clear();
}

// Clean up expired entries periodically
if (typeof window !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitStore.entries()) {
      if (now > entry.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }, 60000); // Clean up every minute
}



