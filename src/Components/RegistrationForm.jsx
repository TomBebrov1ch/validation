import React, { useState } from 'react'

const RegistrationForm = (handleClick) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [repPass, setRepPass] = useState('')
    return (
        <form>
            <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Введите ваш email'
            />
            <input type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder='Введите ваш пароль'
            />
            <input type="password"
                value={repPass}
                onChange={(e) => setRepPass(e.target.value)}
                placeholder='Повторите пароль'
            />
            <button
                onClick={() => handleClick(email, pass)}>
            </button>
        </form>
    )
}

export default RegistrationForm