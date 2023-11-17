import React from "react";
import styles from './FormAuth.module.css'

const FormAuth = ({ description, emailIuput, passInput, buttonName }) => {
    return (
        <div className={styles.FormAuth}>
            <h1 className={styles.Title}>Спробуй нові відчуття</h1>
            <p className={styles.Description}>{description}</p>
            <label className={styles.labelForm}>
                <p className={styles.labelName}>{emailIuput.label}</p>
                <input className={styles.inpForm} name={emailIuput.name} placeholder={emailIuput.placeholder} />
            </label>
            <label className={styles.labelForm}>
                <p className={styles.labelName}>{passInput.label}</p>
                <input className={styles.inpForm} name={passInput.name} placeholder={passInput.placeholder} />
            </label>
            <button className={styles.btnForm}>{buttonName}</button>
        </div>
    )
}
export default FormAuth