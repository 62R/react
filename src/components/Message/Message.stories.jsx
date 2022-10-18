import React from 'react';

import { Message } from './Message';

export default {
  title: 'MyApp/Message',
  component: Message,
};

const Template = (args) => <Message {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  msg: { author: 'John', msg: 'Some message' },
};

export const Secondary = Template.bind({});

Secondary.args = {
  msg: { author: 'Bot', msg: 'Another message' },
};
