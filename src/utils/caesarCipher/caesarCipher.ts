import clamp from '../clamp';
import { type CaesarCipher } from './caesarCipher.type';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetLength = ALPHABET.length;

const caesarCipher: CaesarCipher = (
  valueToEncode: string,
  { shift = 3, direction = 'LEFT' } = {}
) => {
  const boundedShift = clamp(Math.round(shift), 1, alphabetLength - 1);
  const cipherOffset =
    direction === 'LEFT' ? alphabetLength - boundedShift : boundedShift;

  return [...valueToEncode].reduce((encoded, character) => {
    const characterIndex = ALPHABET.indexOf(character.toUpperCase());

    if (characterIndex < 0) return `${encoded}${character}`;

    const cipheredCharacter =
      ALPHABET[(characterIndex + cipherOffset) % alphabetLength];

    return `${encoded}${cipheredCharacter}`;
  }, '');
};

export default caesarCipher;
