import caesarCipher from './caesarCipher';

describe('caesarCipher', () => {
  it('should shift characters by a default of 3 places left', () => {
    expect(caesarCipher('ABCDEF')).toEqual('XYZABC');
  });

  it('should not alter non-alphabetic characters', () => {
    expect(caesarCipher('ABC123D-E-F')).toEqual('XYZ123A-B-C');
  });

  it('should be input case insensitive', () => {
    expect(caesarCipher('abcdef')).toEqual('XYZABC');
  });

  it('should take an optional rotation amount argument', () => {
    expect(caesarCipher('abcdef', { shift: 13 })).toEqual('NOPQRS');
  });

  it('should treat shift option floats as integers', () => {
    expect(caesarCipher('abcdef', { shift: 13.4 })).toEqual('NOPQRS');
  });

  it('should clamp the rotation amount to within the alphabet size', () => {
    expect(caesarCipher('abcdef', { shift: 99 })).toEqual('BCDEFG');
  });

  it('should take an optional rotation direction argument', () => {
    expect(caesarCipher('abcdef', { shift: 3, direction: 'RIGHT' })).toEqual(
      'DEFGHI'
    );
  });
});
