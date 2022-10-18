import style from './Message.module.scss';

export const Message = ({ msg: { author, msg } }) => {
  let authorStyle = '';
  if (author === 'Bot') {
    authorStyle = 'message_author_bot';
  }
  return (
    <div className={style.message + ' ' + style[authorStyle]}>
      <p className={style.message__author}>{author}</p>
      <p className={style.message__message}>{msg}</p>
    </div>
  );
};
