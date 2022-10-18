import { Form } from './Form';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

const mockHandler = jest.fn();
let inputs = [];

beforeEach(() => {
  render(<Form addMsg={mockHandler} />);
  inputs = screen.getAllByRole('textbox');
});

describe('Form', () => {
  it('render component with snapshot', () => {
    const { asFragment } = render(<Form addMsg={mockHandler} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('button is disabled, if form empty', () => {
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('dont submit when name not enter', async () => {
    await userEvent.type(inputs[1], 'Hello, world!');
    await userEvent.click(screen.getByRole('button'));

    expect(mockHandler).toHaveBeenCalledTimes(0);
  });

  it('dont submit when message not enter', async () => {
    await userEvent.type(inputs[0], 'Name');
    await userEvent.click(screen.getByRole('button'));

    expect(mockHandler).toHaveBeenCalledTimes(0);
  });

  it('submit when form complited', async () => {
    await userEvent.type(inputs[0], 'Name');
    await userEvent.type(inputs[1], 'Hello, world!');
    await userEvent.click(screen.getByRole('button'));

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  it('clear message after submit', async () => {
    await userEvent.type(inputs[0], 'Name');
    await userEvent.type(inputs[1], 'Hello, world!');
    await userEvent.click(screen.getByRole('button'));

    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(inputs[1].value).toBe('');
  });

  it('name is not empty after submit', async () => {
    await userEvent.type(inputs[0], 'Name');
    const name = inputs[0].value;
    await userEvent.type(inputs[1], 'Hello, world!');
    await userEvent.click(screen.getByRole('button'));

    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(inputs[0].value).toBe(name);
  });
});
