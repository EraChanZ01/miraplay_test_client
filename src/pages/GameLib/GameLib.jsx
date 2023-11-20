import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import CardGame from '../../components/СardGame/СardGame'
import styles from './GameLib.module.css'
import configGameLib from "../configGameLib.json"
import { QueryClient, useQuery } from 'react-query';
import { getGames, checkAuth } from '../../api/rest'
import { updateUserData } from '../../store/slices/userReducer'
import { connect } from "react-redux";

const GameLib = ({ updateUserData }) => {
    const navigate = useNavigate()

    const [setting, setSetting] = useState({
        page: 1,
        isFreshGamesFirst: true,
        genre: "FREE",
        gamesToShow: 9,

    })
    useEffect(() => {
        const btn = document.querySelectorAll(`.${styles.genres}`)
        btn.forEach(el => el.style.backgroundColor = '')
        const element = document.getElementById(setting.genre)
        if (element) element.style.backgroundColor = 'rgb(1, 148, 1)'
    }, [setting.genre])

    useQuery({
        queryFn: () => checkAuth(setting),
        queryKey: ['user'],
        onSuccess: ({ data }) => {
            updateUserData(data)
        },
        onError: ({ response }) => {
            navigate('/auth')
        },
        retry: false
    })

    const { data: dataGames, isSuccess: isGameSuccess } = useQuery({
        queryFn: () => getGames(setting),
        queryKey: ['games', setting],
    })

    const changeFilter = ({ target }) => {
        setSetting({ ...setting, isFreshGamesFirst: target.value === "new" })
    }
    const changeGenres = (value) => {
        setSetting({ ...setting, genre: value, gamesToShow: 9 })
    }
    const increaseGames = () => {
        setSetting({ ...setting, gamesToShow: setting.gamesToShow + 9 })
    }

    return (
        <div className={styles.GameLib}>
            <h1 className={styles.title}>ВСІ ІГРИ</h1>
            <div className={styles.tools}>
                <div className={styles.buttonGroup}>
                    {configGameLib.genres.map((el, index) => <button className={styles.genres}
                        key={index} id={el.value} onClick={() => changeGenres(el.value)}>{el.name}</button>)}
                </div>
                <div className={styles.filterBlock}>
                    <div className={styles.filterDate}>Сортувати:
                        <select className={styles.selectDate} onChange={(e) => changeFilter(e)}>
                            <option value="new">Спочатку нові</option>
                            <option value="old">Спочатку старі</option>
                        </select>
                    </ div>
                </div>
            </div>
            <div className={styles.boxGames}>
                {isGameSuccess && dataGames.data.games.map((game, index) => <CardGame key={index} gameName={game.commonGameName}
                    gameDescription={game.gameDescription} urlImage={game.gameImage} genre={game.genre} />)}
            </div>
            {dataGames?.data.games.length < dataGames?.data.gamesListLength && <button className={styles.btnMore} onClick={increaseGames}>ПОКАЗАТИ ЩЕ</button>}
        </div >
    )
}

const mapDispatchToProps = (dispatch) => ({
    updateUserData: (data) => dispatch(updateUserData(data))
})

export default connect(null, mapDispatchToProps)(GameLib)