export const DebtorsList = ({ debtorsArr, setDebtorsArr }) => {
    const deleteDebt = (evt) => {
        setDebtorsArr((prevList) =>
            [...prevList.slice(0, evt.target.dataset.idx), ...prevList.slice(evt.target.dataset.idx + 1)]
        );
    }
    const renderItem = (item, idx) => {
        return <li key={idx}>
            {item.name} должен {item.debt}
            <button type="button" onClick={deleteDebt} data-idx={idx}>Вернул</button>
        </li >
    }

    return <ul>
        {debtorsArr.map((item, idx) => renderItem(item, idx))}
    </ul>
}