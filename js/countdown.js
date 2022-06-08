class CountDown {
    constructor(expiredDate, onComplete) {
        this.expiredDate = expiredDate,
        this.onComplete = onComplete
    }

    setExpiredDate(expiredDate) {
        this.remainingTime = expiredDate.getTime() - (new Date()).getTime()
        this.remainingTime > 0 ? this.start() : this.complete()
    }
}