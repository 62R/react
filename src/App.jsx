import { useState } from 'react';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';
import style from './App.module.scss'

function App() {
    const [msgList, setMsgList] = useState([]);

    return (
        <div className={style.App}>
            <h1>React app</h1>
            <MessageList list={msgList} />
            <Form list={msgList} setList={setMsgList} />
        </div>
    );
}

export default App;
