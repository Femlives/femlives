import bcrypt from 'bcrypt';

export const encryptPassword = async (password: string): Promise<string> => {
  if (typeof password !== 'string' || password.trim().length === 0) {
    throw new Error('Password must be a non-empty string');
  }

  try {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error('Error encrypting password:', error);
    throw new Error('Failed to encrypt password');
  }
};
