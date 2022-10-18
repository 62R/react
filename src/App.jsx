import { useState } from 'react';
import { Form } from './components/Form';
import { MessageList } from './components/MessageList';
import style from './App.module.scss';
import { useEffect } from 'react';

function App() {
  const [msgList, setMsgList] = useState([]);

  const addMsg = (author, msg) => {
    setMsgList((prevList) => [...prevList, { author, msg }]);
  };

  useEffect(() => {
    if (msgList.length > 0 && msgList[msgList.length - 1].author !== 'Bot') {
      const greetings = 'Hi ' + msgList[msgList.length - 1].author;
      const timeoutId = setTimeout(() => {
        addMsg('Bot', greetings);
      }, 1500);
      return () => clearTimeout(timeoutId);
    }
  }, [msgList]);

  return (
    <div className={style.App}>
      <h1>React app</h1>
      <MessageList list={msgList} />
      <Form list={msgList} addMsg={addMsg} />
    </div>
  );
}

export default App;
