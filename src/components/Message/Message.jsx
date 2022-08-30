import style from './Message.module.scss'

export const Message = ({ msg }) => {
    return <p className={style.message}>
        Это сообщение было передано из App: <span className={style.message__span}> {msg} </span>
    </p>
}