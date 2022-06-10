const countDownWrapper = document.querySelector('#___gatsby > div > div > section > div.Container-sc-1ab0bzv-0.iMlVqW.mainContainer > div > div.fourstyle__NormalClockWrapper-sc-1qfzxsa-3.jpMizN')
const countDown = new CountDown(
    new Date('7/15/22'), 
    (countDownTime) => {
        countDownWrapper.innerHTML =  
            `<div class="NormalClock">
                <div class="NormalUnitContainer">
                    <div class="NormalupperCard">
                        <span>${countDownTime.days}</span>
                    </div>
                    <div class="digitLabel">
                        <label>
                            <span>days</span>
                        </label>
                    </div>
                </div>
                <div class="NormalUnitContainer">
                    <div class="NormalupperCard">
                        <span>${countDownTime.hours}</span>
                    </div>
                    <div class="digitLabel">
                        <label>
                            <span>hours</span>
                        </label>
                    </div>
                </div>
                <div class="NormalUnitContainer">
                    <div class="NormalupperCard">
                        <span>${countDownTime.minutes}</span>
                    </div>
                    <div class="digitLabel">
                        <label>
                            <span>minutes</span>
                        </label>
                    </div>
                </div>
                <div class="NormalUnitContainer">
                    <div class="NormalupperCard">
                        <span>${countDownTime.seconds}</span>
                    </div>
                    <div class="digitLabel">
                        <label>
                            <span>seconds</span>
                        </label>
                    </div>
                </div>
            </div>`
    },
    () => {
        countDownWrapper.innerHTML = `<p>Message to display when done</p>`
    }
)

const notifyButton = document.querySelector("#___gatsby > div > div > section > div.Container-sc-1ab0bzv-0.iMlVqW.mainContainer > div > div.fourstyle__ContactFormWrap-sc-1qfzxsa-5.eXbrgY > form > button")
notifyButton.addEventListener('click', () => {
    let userEmail = getUserEmail()
})

const getUserEmail = () => {
    const emailInputElement = document.querySelector("#user_email")
    const userEmail = emailInputElement.value
    return userEmail  
}

