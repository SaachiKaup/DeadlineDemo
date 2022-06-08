class CountDown {
    constructor(expiredDate, onRender, onComplete) {
        this.setExpiredDate(expiredDate);
        this.onRender = onRender;
        this.onComplete = onComplete;
    }

    setExpiredDate(expiredDate) {
        let currentTime = (new Date()).getTime();
        this.remainingTime = expiredDate.getTime() - currentTime;
        this.remainingTime > 0 ? this.start() : this.onComplete();
    }

    start() {
        const intervalId = setInterval(() => {
            this.remainingTime -= 1000;
            this.onRender(this.getTime())
            if (this.remainingTime < 0){
                this.onComplete() //complete() in code
                clearInterval(intervalId)
            }
        }, 1000)
    }

    getTime() {
        return {
            days: Math.floor(this.remainingTime / 1000 / 60 / 60 / 24),
            hours: Math.floor(this.remainingTime / 1000 / 60 / 60) % 24,
            minutes: Math.floor(this.remainingTime / 1000 / 60) % 60,
            seconds: Math.floor(this.remainingTime / 1000) % 60
        }
    }
    
}