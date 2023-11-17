import React, { useState, useLayoutEffect } from "react"
import FormAuth from '../../components/FormAuth/FormAuth'
import styles from './AuthPage.module.css'

const AuthPage = () => {
    const [register, setRegister] = useState(true)

    const searchElement = () => {
        let id
        register ? id = 'SignUp' : id = 'SignIn'
        return document.getElementById(id)
    }

    useLayoutEffect(() => {
        const element = searchElement()
        element.classList.add(styles.activeBtn)
    }, [])

    const handleClick = ({ target }, value) => {
        const element = searchElement()
        element.classList.remove(styles.activeBtn)
        target.classList.add(styles.activeBtn)
        setRegister(value)
    }

    return (
        <div className={styles.AuthPage}>
            <header className={styles.AuthBtn}>
                <button className={styles.btn} id="SignIn" onClick={(e) => handleClick(e, false)}>ВХІД</button>
                <button className={styles.btn} id="SignUp" onClick={(e) => handleClick(e, true)} >РЕЄСТРАЦІЯ</button>
            </header>
            <FormAuth description={register ? "Зареєструйся, щоб грати на максималках у свої улюблені ігри" : 'Увійди, щоб грати на максималках у свої улюблені ігри'}
                emailIuput={{ name: "email", label: 'ВВЕДІТЬ ВАШ EMAIL:', placeholder: "YOUREMAIL@MIRAPLAY.COM" }}
                passInput={{ name: "password", label: 'ВВЕДІТЬ ВАШ ПАРОЛЬ:', placeholder: "ВАШ ПАРОЛЬ" }}
                buttonName={register ? 'РЕЄСТРАЦІЯ' : 'ВХІД'} />
        </div>
    )
}

export default AuthPage