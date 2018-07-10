window.addEventListener('load', () => {
  var theme1 = document.getElementById("theme1")
  var theme2 = document.getElementById("theme2")
  var theme3 = document.getElementById("theme3")
  var theme4 = document.getElementById("theme4")
  var messageBg = document.getElementById("messages")
  var trainerBg = document.getElementById("trainer-list")

  theme1.addEventListener('click', function(){
    console.log('hello');
    messageBg.style.background = "url('lightning-chat.png')";
    messageBg.style.backgroundSize = "cover";
    trainerBg.style.background = "url('lightning-banner.png')";
    trainerBg.style.backgroundSize = "cover";
  })
  theme2.addEventListener('click', function(){
    console.log('sure');
    messageBg.style.background = "url('water-chat.png')";
    trainerBg.style.background = "url('water-banner.png')";
    messageBg.style.backgroundSize = "cover";
    trainerBg.style.backgroundSize = "cover";
  })
  theme3.addEventListener('click', function(){
    console.log('ok');
    messageBg.style.background = "url('fire-chat.png')"
    trainerBg.style.background = "url('fire-banner.png')";
    messageBg.style.backgroundSize = "cover";
    trainerBg.style.backgroundSize = "cover";
  })
  theme4.addEventListener('click', function(){
    console.log('bye');
    messageBg.style.background = "url('grass-chat.png')"
    trainerBg.style.background = "url('grass-banner.png')";
    messageBg.style.backgroundSize = "cover";
    trainerBg.style.backgroundSize = "cover";
  })
})
