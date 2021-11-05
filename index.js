const say = require('say')
const moment = require('moment')


var hasAlramStarted = false
const minute = '00'
const resetAlramTime = +minute + 1

setInterval(() => {
    //start alram
    if (moment().format('mm') == minute && !hasAlramStarted) {
    hasAlramStarted = true
    let time = moment().format("h:mm a")
    say.speak(`It's ${time}`)
    }

    //end alram
    if (moment().format('mm') == resetAlramTime && hasAlramStarted) {
        hasAlramStarted = false
    }

return null
},1000)
