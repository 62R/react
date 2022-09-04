import style from "./Form.module.scss";

export const Form = ({ list, setList }) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addMsg(evt.target.elements.name.value, evt.target.elements.msg.value);
        const greetings = 'Hi ' + evt.target.elements.name.value
        setTimeout(() => { addMsg('Bot', greetings) }, 1500);

        evt.target.reset();
    }
    const addMsg = (author, msg) => {
        setList((prevList) => [...prevList, { author, msg }]);
    }
    return <form onSubmit={handleSubmit} className={style.form}>
        Имя: <input className={style.input} name="name" />
        Сообщение: <textarea className={style.msgArea} name="msg" rows="5" />
        <button className={style.btn}> Добавить </button>
    </form>
}