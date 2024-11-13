import { Crypto } from '@cloudflare/workers-types';

declare const crypto: Crypto;

export const encryptPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const salt = crypto.getRandomValues(new Uint8Array(16));

  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    data,
    'PBKDF2',
    false,
    ['deriveBits']
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    256
  );

  const combined = new Uint8Array([...salt, ...new Uint8Array(derivedBits)]);
  return Buffer.from(combined).toString('base64');
};

export const verifyPassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  try {
    const combined = new Uint8Array(Buffer.from(hash, 'base64'));
    const salt = combined.slice(0, 16);
    const storedKey = combined.slice(16);

    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      data,
      'PBKDF2',
      false,
      ['deriveBits']
    );

    const derivedBits = await crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt,
        iterations: 100000,
        hash: 'SHA-256',
      },
      keyMaterial,
      256
    );

    const newKey = new Uint8Array(derivedBits);

    if (newKey.length !== storedKey.length) {
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
