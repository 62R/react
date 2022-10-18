import { MessageList } from './MessageList';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('MessegeList', () => {
  it('render component snapshot', () => {
    const list = [
      { author: 'author', msg: 'msg1' },
      { author: 'author', msg: 'msg2' },
    ];
    const { asFragment } = render(<MessageList list={list} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
