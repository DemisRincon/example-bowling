import React, { useState } from 'react'
import { addFrame } from '../methods/bowling'
import styles from '../styles/Main.module.scss'
import Board from './Board'
import Button from './Button'
const Bowling = () => {
    const [gameStarted, setGameStarted] = useState(false)
    const [manualGame, setManualGame] = useState(false)
    const [score, setScore] = useState([])
    const handleNewGame=()=>{
        setScore([])
        setGameStarted(true)
    }
    const handleAddFrame = () => {
        if (score.length < 10) {
            const newScore = addFrame(score)

            if(score.length>=9){
                setManualGame(false)
                setGameStarted(false)
            }
            return setScore(newScore)
        } else {
            setManualGame(false)
            setGameStarted(false)

            return
        }

    }
    const automaticGame = () => {
        let newScore = score
        for (let index = 0; index < 10; index++) {
            newScore = addFrame(newScore)

        }
        setManualGame(false)
        setGameStarted(false)
        return setScore(newScore)
    }

    return (
        <div className={styles.Main}>
            <div className={styles.Banner}>
                <div className={styles.Circle} />
                <img src="/images/logo-bc.png" />
            </div>
            <div className={styles.Body}>
                <div className={styles.TableContainer}>
                    <Board score={score}/>
                </div>
                <div className={styles.ButtonsContainer}>
                    {!gameStarted && <Button action={handleNewGame} text="NUEVO JUEGO" />}
                    {
                        (gameStarted && !manualGame) &&
                        <>
                            <Button text="JUEGO MANUAL" action={() => setManualGame(true)} />
                            <Button text="JUEGO AUTOMATICO" action={automaticGame} />
                        </>
                    }
                    {manualGame && <Button action={handleAddFrame} text="NUEVO FRAME" />}

                </div>
            </div>
        </div>
    )
}

export default Bowling
