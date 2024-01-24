import Field from './components/Field';
import useCipher from './hooks/useCipher';
import './app.scss';

export const App = () => {
  const { updateValue, updateShift, updateDirection, encoded } = useCipher();

  return (
    <div className="app">
      <header className="app-header">
        <h1>Caesar Cipher</h1>
      </header>

      <div className="app-body">
        <Field labelText="Cipher input" id="cipher_input">
          {(className: string, id: string) => (
            <input
              type="text"
              onChange={({ target: { value } }) => updateValue(value)}
              className={className}
              id={id}
            />
          )}
        </Field>
        <Field labelText="Cipher shift" id="cipher_shift">
          {(className: string, id: string) => (
            <input
              type="number"
              onChange={({ target: { value } }) => updateShift(value)}
              min="1"
              max="25"
              defaultValue="3"
              className={className}
              id={id}
            />
          )}
        </Field>
        <Field labelText="Cipher direction" id="cipher_direction">
          {(className: string, id: string) => (
            <select
              onChange={({ target: { value } }) => updateDirection(value)}
              className={className}
              name="direction"
              id={id}
            >
              <option value="LEFT">Left</option>
              <option value="RIGHT">Right</option>
            </select>
          )}
        </Field>
      </div>

      <footer className="app-footer">
        <span>Answer</span>
        <span>{encoded}</span>
      </footer>
    </div>
  );
};
