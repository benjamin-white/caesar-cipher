export type CipherDirection = 'LEFT' | 'RIGHT';

export type CaesarCipher = (
  value: string,
  options?: { shift?: number; direction?: CipherDirection }
) => string;
