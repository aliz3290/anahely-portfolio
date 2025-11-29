/**
 * Security Utilities
 * Provides encryption, decryption, and data integrity checks for localStorage
 */

// Simple encryption/decryption using Web Crypto API (browser native, no dependencies)
// For production, consider using a more robust solution

const ENCRYPTION_KEY = 'nana-website-secure-key-v1'; // In production, use environment variable

/**
 * Simple hash function for integrity checking
 */
async function simpleHash(data: string): Promise<string> {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Simple encryption using XOR (for lightweight client-side encryption)
 * Note: This is basic obfuscation. For sensitive data, use proper encryption.
 */
function encrypt(data: string): string {
  let encrypted = '';
  const key = ENCRYPTION_KEY;
  for (let i = 0; i < data.length; i++) {
    encrypted += String.fromCharCode(
      data.charCodeAt(i) ^ key.charCodeAt(i % key.length)
    );
  }
  return btoa(encrypted); // Base64 encode
}

/**
 * Decrypt data
 */
function decrypt(encryptedData: string): string {
  try {
    const data = atob(encryptedData); // Base64 decode
    let decrypted = '';
    const key = ENCRYPTION_KEY;
    for (let i = 0; i < data.length; i++) {
      decrypted += String.fromCharCode(
        data.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      );
    }
    return decrypted;
  } catch (error) {
    console.error('Decryption error:', error);
    return '';
  }
}

/**
 * Securely store data in localStorage with encryption and integrity check
 */
export async function secureSetItem(key: string, value: string): Promise<void> {
  try {
    const encrypted = encrypt(value);
    const hash = await simpleHash(value);
    const data = JSON.stringify({
      encrypted,
      hash,
      timestamp: Date.now()
    });
    localStorage.setItem(key, data);
  } catch (error) {
    console.error('Error storing secure data:', error);
    // Fallback to plain storage if encryption fails
    localStorage.setItem(key, value);
  }
}

/**
 * Securely retrieve data from localStorage with integrity verification
 */
export async function secureGetItem(key: string): Promise<string | null> {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return null;

    // Try to parse as encrypted data
    try {
      const parsed = JSON.parse(stored);
      if (parsed.encrypted && parsed.hash) {
        const decrypted = decrypt(parsed.encrypted);
        const hash = await simpleHash(decrypted);
        
        // Verify integrity
        if (hash !== parsed.hash) {
          console.warn('Data integrity check failed for key:', key);
          // Clear corrupted data
          localStorage.removeItem(key);
          return null;
        }
        
        return decrypted;
      }
    } catch {
      // Not encrypted format, return as-is (backward compatibility)
      return stored;
    }

    return stored;
  } catch (error) {
    console.error('Error retrieving secure data:', error);
    return null;
  }
}

/**
 * Remove secure item
 */
export function secureRemoveItem(key: string): void {
  localStorage.removeItem(key);
}

/**
 * Input validation utilities
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

export function validateUsername(username: string): boolean {
  // Username: 3-20 alphanumeric characters, underscores, hyphens
  const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
  return usernameRegex.test(username);
}

export function validatePassword(password: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  if (password.length > 128) {
    errors.push('Password must be less than 128 characters');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Sanitize string input (basic XSS prevention)
 */
export function sanitizeInput(input: string, maxLength: number = 1000): string {
  if (!input || typeof input !== 'string') return '';
  
  // Trim and limit length
  let sanitized = input.trim().slice(0, maxLength);
  
  // Remove potentially dangerous characters
  sanitized = sanitized
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
  
  return sanitized;
}



