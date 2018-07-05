function sendMessage(){
  var message = document.getElementById("message_input")
  var tempMessage = message.value
  App.room.speak(tempMessage)
}
