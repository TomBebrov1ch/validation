import { useState } from "react"

const LoginForm = (handleClick) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    return (
        <form>
            <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите email"
            />
            <input type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Введите пароль"
            />
            <button onClick={() => handleClick(email, pass)}></button>
        </form>
    )
}

export default LoginForm