import style from './Message.module.scss'

export const Message = ({ msg }) =>
    <p className={style.message}>
        {msg.author}: <span>{msg.msg}</span>
    </p>
