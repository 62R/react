import { useState } from 'react';
import style from './Form.module.scss';

export const Form = ({ setList }) => {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addMsg(name, msg);
    const greetings = 'Hi ' + name;
    const timeoutId = setTimeout(() => {
      addMsg('Bot', greetings);
      clearTimeout(timeoutId);
    }, 5000);
    setMsg('');
  };
  const addMsg = (author, msg) => {
    setList((prevList) => [...prevList, { author, msg }]);
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      Имя:
      <input
        className={style.input}
        value={name}
        onInput={(evt) => setName(evt.target.value)}
        name="name"
      />
      Сообщение:
      <textarea
        className={style.msgArea}
        value={msg}
        onInput={(evt) => setMsg(evt.target.value)}
        name="msg"
        rows="5"
      />
      <button className={style.btn}> Добавить </button>
    </form>
  );
};
