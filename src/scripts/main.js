AOS.init();

const birthDay = new Date("Mar 12, 2025 16:00:00");

const timeBday = birthDay.getTime()

const coutTime = setInterval(() => {
    const dateNow = new Date();
    const timeAcessNow = dateNow.getTime()

    const timeEvent = timeBday - timeAcessNow;

    const dayMs = 1000 * 60 * 60 * 24;
    const hourMs = 1000 * 60 * 60;
    const minuteMs = 1000 * 60;
    const secondMs = 1000;

    const daysLeft = Math.floor(timeEvent / dayMs);
    const hoursLeft = Math.floor((timeEvent % dayMs) / hourMs);
    const minutesLeft = Math.floor((timeEvent % hourMs) / minuteMs);
    const secondsLeft = Math.floor((timeEvent % minuteMs) / secondMs);


    document.getElementById('countDate').innerHTML = `${daysLeft} dias ${hoursLeft}h ${minutesLeft}min ${secondsLeft}sec `
    if(timeEvent < 0){
        clearInterval(coutTime)
        document.getElementById('countDate').innerHTML = `O aniversário já aconteceu`
    }
}, 1000);