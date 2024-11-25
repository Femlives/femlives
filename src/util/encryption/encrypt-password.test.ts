import { encryptPassword } from './encrypt-passwords';

describe('encryptPassword', () => {
  it('should throw an error if the password is not a string', async () => {
    await expect(encryptPassword(123 as unknown as string)).rejects.toThrow(
      'Password must be a non-empty string'
    );
  });

  it('should throw an error if the password is an empty string', async () => {
    await expect(encryptPassword('')).rejects.toThrow(
      'Password must be a non-empty string'
    );
  });

  it('should return a hashed password when a valid string is provided', async () => {
    const password = 'securepassword123';
    const hashedPassword = await encryptPassword(password);

    expect(hashedPassword).toBeDefined();
    expect(typeof hashedPassword).toBe('string');
    expect(hashedPassword).not.toEqual(password);
  });

  it('should produce a hash that matches the original password using bcrypt.compare', async () => {
    const password = 'securepassword123';
    const hashedPassword = await encryptPassword(password);

    const isMatch = await bcrypt.compare(password, hashedPassword);
    expect(isMatch).toBe(true);
  });
});
