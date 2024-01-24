import { useRef, useState } from 'react';
import caesarCipher, { CipherDirection } from '../../utils/caesarCipher';

const VALID_DIRECTIONS = ['LEFT', 'RIGHT'];

const useCipher = () => {
  const [encoded, setEncoded] = useState('');
  const value = useRef('');
  const shift = useRef<number>();
  const direction = useRef<CipherDirection>();

  const encode = () => {
    setEncoded(
      caesarCipher(value.current, {
        shift: shift.current,
        direction: direction.current,
      })
    );
  };

  const updateValue = (newValue: string) => {
    if (typeof newValue !== 'string') {
      console.warn(
        '`updateValue` was called with an incorrect type: ' +
          `\`${typeof newValue}\``
      );
      return;
    }
    value.current = newValue;
    encode();
  };

  const updateShift = (newShift: string) => {
    if (Number.isNaN(Number.parseFloat(newShift))) {
      console.warn('`updateShift` was called with a non-numeric value');
      return;
    }
    shift.current = +newShift;
    encode();
  };

  const updateDirection = (newDirection: string) => {
    if (!VALID_DIRECTIONS.includes(newDirection)) {
      console.warn(
        '`updateDirection` was called with an invalid direction value: ' +
          `\`${newDirection}\``
      );
      return;
    }
    direction.current = newDirection as CipherDirection;
    encode();
  };

  return {
    updateValue,
    updateShift,
    updateDirection,
    encoded,
  };
};

export default useCipher;
