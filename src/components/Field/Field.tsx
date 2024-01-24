import { type FieldProps } from './Field.type';
import './Field.scss';

const Field = ({ children, labelText, id }: FieldProps) => (
  <div className="field">
    <label className="field-label" htmlFor={id}>
      {labelText}
    </label>
    {children('field-input', id)}
  </div>
);

export default Field;
