import { DebtorItem } from "../DebtorsItem/DebtorItem";

export const DebtorsList = ({ debtorsArr, setDebtorsArr }) => {
    const deleteDebt = (evt) => {
        setDebtorsArr((prevList) =>
            [...prevList.slice(0, evt.target.value), ...prevList.slice(evt.target.value + 1)]
        )
    }

    return <ul>
        {debtorsArr.map((item, idx) => <DebtorItem key={idx} idx={idx} debtor={item} deleteDebt={deleteDebt} />)}
    </ul>
}