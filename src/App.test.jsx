import App from './App';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

beforeEach(() => {
  render(<App />);
});

describe('App', () => {
  it('bot answered', async () => {
    const inputs = screen.getAllByRole('textbox');
    await userEvent.type(inputs[0], 'Name');
    await userEvent.type(inputs[1], 'Hello, world!');
    await userEvent.click(screen.getByRole('button'));
    await waitFor(
      () => {
        expect(screen.getByText('Bot')).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  });
});
