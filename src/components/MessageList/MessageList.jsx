import { Message } from '../Message/Message';
import style from './MessageList.module.scss';

export const MessageList = ({ list }) => (
  <div className={style.messageList}>
    {list.map((item, idx) => (
      <Message key={idx} msg={item} />
    ))}
  </div>
);
