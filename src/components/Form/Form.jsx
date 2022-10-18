import { useState } from 'react';
import style from './Form.module.scss';

export const Form = ({ addMsg }) => {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addMsg(name, msg);
    setMsg('');
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label htmlFor="name">Имя:</label>
      <input
        className={style.input}
        value={name}
        onInput={(evt) => setName(evt.target.value)}
        id="name"
      />
      <label htmlFor="msg">Сообщение:</label>
      <textarea
        className={style.msgArea}
        value={msg}
        onInput={(evt) => setMsg(evt.target.value)}
        id="msg"
        rows="5"
      />
      <button className={style.btn} disabled={!msg || !name}>
        Отправить
      </button>
    </form>
  );
};
