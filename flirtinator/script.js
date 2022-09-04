var generateButton = document.getElementById('generate')
var messageBox = document.getElementById('flirtyMessage')

window.onkeypress = function(event) {
      if (event.which == 32) {
        flirt()
      }
    }

function flirt() {
    const greeting = ['Hayyyy','Why hello there','Hi','Hey ','Ciao','Sup','Howdy','What\'s cookin\'']
    const noun = ['you sexy thang', 'good lookin\'','you absolute specimen','baby','darlin\'','sweetie','bella']
    const action = ['grab a drink','meet for coffee','get to know each other better','go on a date','go eat samples at Costco','go out for a bello apperitivo']
    const timeframe = ['after work','tomorrow','this weekend','Friday night','after church','after school']
    const greetingIndex = Math.floor(Math.random()*greeting.length)
    const nounIndex = Math.floor(Math.random()*noun.length)
    const actionIndex = Math.floor(Math.random()*timeframe.length)
    const timeframeIndex = Math.floor(Math.random()*action.length)
    // messageBox.innerHTML=`${greetingIndex} ${nounIndex} ${actionIndex} ${timeframeIndex}`
    // messageBox.innerHTML=greeting.length
    const flirtyMessage = `<h2>${greeting[greetingIndex]} ${noun[nounIndex]}, would you like to ${action[actionIndex]} ${timeframe[timeframeIndex]}?</h2>`
    messageBox.innerHTML=flirtyMessage
}

