import React from "react";
import styles from './СardGame.module.css'

const CardGame = ({ gameName, gameDescription, urlImage, genre }) => {

    function truncateText(text) {
        if (text.length <= 120) {
            return text;
        } else {
            const truncated = text.substring(0, 120);
            return truncated.substring(0, truncated.lastIndexOf(' ')) + '...';
        }
    }

    return (
        <div className={styles.CardGame}>
            <div className={styles.gameImage} style={{ backgroundImage: `url(${urlImage})` }} ></div>
            <div className={styles.genre}>{genre}</div>
            <div className={styles.boxInform}>
                <h2 className={styles.gameName}>{gameName.toUpperCase()}</h2>
                <p className={styles.gameDescription}>{truncateText(gameDescription)}</p>
            </div>
        </div>
    )
}

export default CardGame