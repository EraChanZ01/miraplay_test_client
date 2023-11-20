import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import styles from './FormAuth.module.css'
import { QueryClient, useQuery, useMutation } from 'react-query';
import { updateUserData, errAuth } from '../../store/slices/userReducer'
import { connect } from "react-redux";

const FormAuth = ({ description, emailIuput, passInput, buttonName, fnQuery, updateUserData, errAuth, error }) => {

    const navigate = useNavigate()
    const [user, setUser] = useState({ email: '', password: '' })

    const { mutate, isLoading, isError } = useMutation(fnQuery, {
        onSuccess: ({ data }) => {
            updateUserData(data.user)
            navigate('/')
        },
        onError: ({ response }) => {
            errAuth(response.data)
        }
    });

    const handleChange = ({ target: { value, name } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleClick = () => {
        mutate(user)
    }

    return (
        <div className={styles.FormAuth}>
            <h1 className={styles.Title}>Спробуй нові відчуття</h1>
            <p className={styles.Description}>{description}</p>
            <label className={styles.labelForm}>
                <p className={styles.labelName}>{emailIuput.label}</p>
                <input className={styles.inpForm} name={emailIuput.name} placeholder={emailIuput.placeholder} onChange={(e) => handleChange(e)} />
            </label>
            <label className={styles.labelForm}>
                <p className={styles.labelName}>{passInput.label}</p>
                <input className={styles.inpForm} name={passInput.name} placeholder={passInput.placeholder} onChange={(e) => handleChange(e)} />
            </label>
            {isError && <p className={styles.error}>{error}</p>}
            <button className={styles.btnForm} onClick={handleClick}>{buttonName}</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.userStore
    }
}
const mapDispatchToProps = (dispatch) => ({
    updateUserData: (data) => dispatch(updateUserData(data)),
    errAuth: (data) => dispatch(errAuth(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(FormAuth)