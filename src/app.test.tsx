import { fireEvent, render, screen } from '@testing-library/react';
import { App } from './app';

describe('App', () => {
  it('provides an `input` for creating ciphers', () => {
    render(<App />);

    const textInput = screen.getByLabelText<HTMLInputElement>('Cipher input');
    expect(textInput.type).toBe('text');
  });

  it('provides an `input` for setting the shift amount', () => {
    render(<App />);

    const numberInput = screen.getByLabelText<HTMLInputElement>('Cipher shift');
    expect(numberInput.type).toBe('number');
  });

  it('provides an `input` for setting the shift direction', () => {
    render(<App />);

    const selectInput = screen.getByLabelText('Cipher direction');
    expect(selectInput.nodeName).toBe('SELECT');
  });

  it('it prints a cipher result on text input change', async () => {
    render(<App />);

    fireEvent.input(screen.getByLabelText('Cipher input'), {
      target: {
        value: 'ABCDEF',
      },
    });

    await screen.findByText('XYZABC');
  });

  it('it updates the cipher by shift amount', async () => {
    render(<App />);

    fireEvent.input(screen.getByLabelText('Cipher input'), {
      target: {
        value: 'ABCDEF',
      },
    });

    await screen.findByText('XYZABC');

    fireEvent.input(screen.getByLabelText('Cipher shift'), {
      target: {
        value: '13',
      },
    });

    await screen.findByText('NOPQRS');
  });

  it('it updates the cipher by direction value', async () => {
    render(<App />);

    fireEvent.input(screen.getByLabelText('Cipher input'), {
      target: {
        value: 'ABCDEF',
      },
    });

    fireEvent.change(screen.getByLabelText('Cipher direction'), {
      target: {
        value: 'RIGHT',
      },
    });

    await screen.findByText('DEFGHI');
  });
});
