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
        console.log("remaining time: ", this.remainingTime)
        const intervalId = setInterval(() => {
            this.remainingTime -= 1000;
        this.onRender(this.getDisplayTime())
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

    getDisplayTime() {
        let countDownTimeObj = this.getTime()
        console.log("BF: ", countDownTimeObj)
        for(let key in countDownTimeObj)   {
            console.log("key: ", countDownTimeObj[key])
            if (countDownTimeObj[key] < 10) {
                countDownTimeObj[key] = '0' + String(countDownTimeObj[key])
            }
        }
        return countDownTimeObj
    }
    
}