import { render, screen } from '@testing-library/react';
import Field from './';

describe('Field', () => {
  it('renders a `label` and child component', () => {
    const { container } = render(
      <Field labelText="Button label" id="button">
        {(className, id) => (
          <button type="button" className={className} id={id}>
            Button
          </button>
        )}
      </Field>
    );

    const label = screen.queryByText('Button label');
    const child = screen.getByLabelText('Button label');

    expect(label?.getAttribute('for')).toEqual(child.id);
    expect(child).toHaveClass('field-input');
    expect(container).toMatchSnapshot();
  });
});
