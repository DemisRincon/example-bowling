const geneRateRandom = (maxNumber) => {
    return Math.floor(Math.random() * (maxNumber + 1)) + 0
}
const doFirstShot = () => {
    return geneRateRandom(10)
}
const doSecondShot = (shot1) => {
    let limit = 10 - shot1
    return geneRateRandom(limit)
}
const recalculateScore = (actualScore) => {
    actualScore.map((item, index) => {
        const cumulativeTotal = () => {
            if (index > 0) {
                try {
                    return actualScore[index - 1].points
                } catch (error) {
                    return "no exist"
                }
            }
            else {

                return 0
            }
        }

        const nextFirstShot = () => {
            if (index <= 8) {
                try {
                    return actualScore[index + 1].shot1
                } catch (error) {
                    return "no exist"
                }
            }
            return 0
        }

        const nextTotal = () => {
            if (index <= 8) {
                try {
                    return actualScore[index + 1].total
                } catch (error) {
                    return "no exist"
                }
            }
            return 0
        }
        const next2Total = () => {
            if (index <= 7) {
                try {
                    return actualScore[index + 2].total
                } catch (error) {
                    return "no exist"
                }
            }
            return 0
        }

        const addition = nextFirstShot()
        const cumulative = cumulativeTotal()
        const nextTot = nextTotal()
        const next2Tot = next2Total()


        if (item.shot1 === 10 || item.shot2 === 10) {
            if (nextTot === "no exist" || next2Tot === "no exist" || cumulative === "no exist") {
                return item.points = ""
            }
            return item.points = cumulative + item.total + nextTot + next2Tot
        }
        else if (item.total === 10) {
            if (addition === "no exist" || cumulative === "no exist") {
                return item.points = ""
            }
            return item.points = cumulative + item.total + addition
        }
        else {
            if (cumulative === "no exist") {
                return item.points = ""
            }
            return item.points = cumulative + item.total
        }
    })
    return actualScore
}

export const addFrame = (score) => {
    let localScore = score
    const shot1 = doFirstShot()
    const shot2 = doSecondShot(shot1)
    const total = shot1 + shot2
    const frame = {
        shot1,
        shot2,
        total
    }
    localScore = [...localScore, frame]
    const finalScore = recalculateScore(localScore)
    return finalScore

}