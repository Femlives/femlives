import { Crypto } from '@cloudflare/workers-types';

declare const crypto: Crypto;

export const encryptPassword = async (password: string): Promise<string> => {
  // Convert password string to buffer
  const encoder = new TextEncoder();
  const data = encoder.encode(password);

  const randomSalt = crypto.getRandomValues(new Uint8Array(16));

  // Import password as raw key material
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    data,
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );

  // Derive key using PBKDF2
  const derivedKey = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: randomSalt,
      iterations: 100000, // OWASP recommended minimum
      hash: 'SHA-256',
    },
    keyMaterial,
    256 // 32 bytes
  );

  // Combine randomSalt and derived key
  const combined = new Uint8Array([
    ...randomSalt,
    ...new Uint8Array(derivedKey),
  ]);

  // Convert to base64 for storage
  return btoa(String.fromCharCode(...combined));
};

export const verifyPassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  try {
    // Decode the stored hash
    const combined = Uint8Array.from(atob(hash), (c) => c.charCodeAt(0));

    // Split into salt and key
    const salt = combined.slice(0, 16);
    const storedKey = combined.slice(16);

    // Derive key from input password
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      data,
      { name: 'PBKDF2' },
      false,
      ['deriveBits']
    );

    const derivedKey = await crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt,
        iterations: 100000,
        hash: 'SHA-256',
      },
      keyMaterial,
      256
    );

    const newKey = new Uint8Array(derivedKey);
    if (newKey.byteLength !== storedKey.byteLength) {
      return false;
    }

    for (let i = 0; i < newKey.length; i++) {
      if (newKey[i] !== storedKey[i]) {
        return false;
      }
    }

    return true;
  } catch {
    return false;
  }
};
