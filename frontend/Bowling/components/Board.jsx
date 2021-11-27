import React from 'react'
import styles from '../styles/Board.module.scss'
const Board = ({ score }) => {
    console.log("score loaded", score);
    const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const Frame = data.map(item => {

        return (
            <div className={styles.Frame}>
                <div className={styles.FrameNumber}>
                    {item + 1}
                </div>
                <div className={styles.ScoreContainer}>
                    <div className={styles.ShotsContainer}>
                        <div className={styles.FirstShot}>
                            {
                                score[item] && score[item].shot1
                            }
                        </div>
                        <div className={styles.SecondShot}>
                            {
                                score[item] && score[item].shot2
                            }
                        </div>
                    </div>
                    <div className={styles.PointsContainer}>
                        {
                            score[item] && score[item].points
                        }
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div className={styles.BoardContainer}>
            {Frame}

        </div>
    )
}

export default Board
