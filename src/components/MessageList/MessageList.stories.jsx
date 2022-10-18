import React from 'react';
import { MessageList } from './MessageList';

export default {
  title: 'MyApp/MessageList',
  component: MessageList,
};

const Template = (args) => <MessageList {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  list: [
    { author: 'John', msg: 'Some message' },
    { author: 'Bot', msg: 'Another message' },
  ],
};
