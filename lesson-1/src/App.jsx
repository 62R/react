import { Message } from './components/Message/Message';

function App() {
    const msg = 'Some message';

    return (
        <div className="App">
            <h1>React app</h1>
            <Message msg={msg} />
        </div>
    );
}

export default App;
