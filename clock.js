//analague clock function
const updateClock = () => {
    const now = new Date(); //extracting full time
    const hour = now.getHours() * 30; //converting hours to degrees 
    const minute = now.getMinutes() * 6; //converting minute value to degrees
    const seconds = now.getSeconds() * 6; //converting seconds value to degree

    document.getElementById('hour').style.transform = `rotate(${hour}deg)`
    document.getElementById('minute').style.transform = `rotate(${minute}deg)`
    document.getElementById('second').style.transform = `rotate(${seconds}deg)`
    
}



//12 hour clock
const didgital12hrClock = () => {
    const now = new Date();
    const time12hr = now.toLocaleTimeString('en-US', {hour12: true})
    const hour = parseInt(time12hr.split('')[0])
    const minute = parseInt(time12hr.split(':')[1])
    const seconds = parseInt(time12hr.split(':')[2])
    const zone = time12hr.split(' ')[1]

    document.querySelector('.hr').innerText = `${hour} : `
    document.querySelector('.min').innerText = `${minute} : `
    document.querySelector('.sec').innerText = `${seconds} `
    document.querySelector('.time').innerText = `${zone} `

    if(seconds < 10){
        document.querySelector('.sec').innerText = `0${seconds}`
        
    }
    if(minute < 10) {
        document.querySelector('.min').innerText = `0${minute} :`
    }
    console.log(time12hr)
    // console.log(hour, minute, seconds, zone)
}
// clock12hr()
// digitalClock();
updateClock();

setInterval(() => {
    updateClock();
    didgital12hrClock();
    // digitalClock();
}, 1000)