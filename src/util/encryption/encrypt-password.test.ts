import { encryptPassword } from './encrypt-passwords';

describe('encryptPassword', () => {
  it('Should only accept strings', async () => {
    const noString = 123 as unknown as string;
    await expect(encryptPassword(noString)).rejects.toThrow();
  });
  it('Should return a string', async () => {
    const password = 'password';
    await expect(encryptPassword(password)).resolves.toEqual(
      expect.any(String)
    );
  });
  it('Should not return the same string', async () => {
    const password = 'password';
    await expect(encryptPassword(password)).not.toBe(password);
  });
});
