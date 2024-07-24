const now = new Date();
const time12hr = now.toLocaleTimeString('en-UK', {hour12: true})
const hour = parseInt(time12hr.split('')[0])
const minute = parseInt(time12hr.split(':')[1])
const seconds = parseInt(time12hr.split(':')[2])
const zone = parseInt(time12hr.split(' ')[0])


