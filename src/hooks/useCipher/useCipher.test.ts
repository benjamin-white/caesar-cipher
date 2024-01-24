import { renderHook, act } from '@testing-library/react-hooks';
import useCipher from './useCipher';

const consoleWarn = console.warn;

afterAll(() => {
  console.warn = consoleWarn;
});

describe('useCipher', () => {
  it('should initialise with an empty string for `value`', () => {
    const { result } = renderHook(() => useCipher());

    expect(result.current.encoded).toBe('');
  });

  it('provides an `updateValue` method for creating ciphers', () => {
    const { result } = renderHook(() => useCipher());
    act(() => {
      result.current.updateValue('ABCDEF');
    });

    expect(result.current.encoded).toBe('XYZABC');
  });

  it('allows the `shift` amount to be dynamically set', () => {
    const { result } = renderHook(() => useCipher());
    act(() => {
      result.current.updateShift('13');
      result.current.updateValue('ABCDEF');
    });

    expect(result.current.encoded).toBe('NOPQRS');
  });

  it('allows the `direction` to be dynamically set', () => {
    const { result } = renderHook(() => useCipher());
    act(() => {
      result.current.updateDirection('RIGHT');
      result.current.updateValue('ABCDEF');
    });

    expect(result.current.encoded).toBe('DEFGHI');
  });

  it('warns when `updateValue` is called with a non-string value', () => {
    console.warn = jest.fn();
    const { result } = renderHook(() => useCipher());
    act(() => {
      // @ts-ignore
      result.current.updateValue(55);
    });

    expect(console.warn).toHaveBeenCalledWith(
      '`updateValue` was called with an incorrect type: `number`'
    );
  });

  it('warns when `updateShift` is called with a non-numeric value', () => {
    console.warn = jest.fn();
    const { result } = renderHook(() => useCipher());
    act(() => {
      result.current.updateShift('X');
    });

    expect(console.warn).toHaveBeenCalledWith(
      '`updateShift` was called with a non-numeric value'
    );
  });

  it('warns when `updateDirection` is called with an invalid value', () => {
    console.warn = jest.fn();
    const { result } = renderHook(() => useCipher());
    act(() => {
      // @ts-ignore
      result.current.updateDirection('X');
    });

    expect(console.warn).toHaveBeenCalledWith(
      '`updateDirection` was called with an invalid direction value: `X`'
    );
  });
});
