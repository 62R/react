export const Form = ({ debtorsArr, setDebtorsArr }) => {
    const addDebt = (evt) => {
        evt.preventDefault();
        const newDebtor = {
            name: evt.target.elements.name.value,
            debt: parseInt(evt.target.elements.debt.value)
        }
        setDebtorsArr((prevList) => [...prevList, newDebtor]);
    }
    return <form onSubmit={addDebt}>
        <label>Имя: <input name="name" /></label>
        <label>Долг: <input name="debt" /></label>
        <button> Добавить </button>
    </form>
}