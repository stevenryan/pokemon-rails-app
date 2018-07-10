window.addEventListener('load', () => {
  var storeText = document.getElementById('store-text')
  var buyIcons = document.getElementById('buy-icons')
  var buyCards = document.getElementById('buy-cards')

  buyIcons.addEventListener('mouseover', function(){
    storeText.innerHTML = "Unlock Portraits to show off on your profile and in the Trainer Hub!"
  })
  buyCards.addEventListener('mouseover', function(){
    storeText.innerHTML = "Purchase Pokémon Cards and build up your collection!"
  })
  buyIcons.addEventListener('mouseout', function(){
    storeText.innerHTML = "Welcome to the PokéMart!"
  })
  buyCards.addEventListener('mouseout', function(){
    storeText.innerHTML = "Welcome to the PokéMart!"
  })

  
})
