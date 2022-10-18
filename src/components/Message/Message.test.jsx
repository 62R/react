import { Message } from './Message';
import { render } from '@testing-library/react';

describe('Message', () => {
  it('render component with snaphshot', () => {
    const msg = {
      author: 'One',
      msg: 'Hello world',
    };
    const { asFragment } = render(<Message msg={msg} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
