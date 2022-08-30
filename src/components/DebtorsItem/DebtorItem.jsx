export const DebtorItem = ({ idx, debtor, deleteDebt }) =>
    <li>
        {debtor.name} должен {debtor.debt}
        <button type="button" onClick={deleteDebt} value={idx}>Вернул</button>
    </li>
