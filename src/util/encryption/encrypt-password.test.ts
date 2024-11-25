import { encryptPassword } from './encrypt-passwords';

describe('encryptPassword', () => {
  it('Should only accept strings', () => {
    const noString = 123 as unknown as string;
    expect(encryptPassword(noString)).rejects.toThrow();
  });
  it('Should return a string', () => {
    const password = 'password';
    expect(encryptPassword(password)).resolves.toEqual(expect.any(String));
  });
  it('Should not return the same string', () => {
    const password = 'password';
    expect(encryptPassword(password)).not.toBe(password);
  });
});
