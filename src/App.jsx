import { useState } from 'react';
import { Form } from './components/Form/Form';
import { Message } from './components/Message/Message';
import { DebtorsList } from './components/DebtorsList/DebtorsList';

function App() {
    const msg = 'Some message';
    const [debtorsArr, setDebtorsArr] = useState([{ name: 'Иван', debt: 1000 }, { name: 'Алекс', debt: 2000 }]);

    return (
        <div className="App">
            <h1>React app</h1>
            <Message msg={msg} />
            <Form debtorsArr={debtorsArr} setDebtorsArr={setDebtorsArr} />
            <DebtorsList debtorsArr={debtorsArr} setDebtorsArr={setDebtorsArr} />
        </div>
    );
}

export default App;
