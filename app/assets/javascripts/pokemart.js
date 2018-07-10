window.addEventListener('load', () => {
  var storeText = document.getElementById('store-text')
  var buyIcons = document.getElementById('buy-icons')
  var buyCards = document.getElementById('buy-cards')
  var iconSelection = document.getElementById('icon-selection')
  var cardSelection = document.getElementById('card-selection')

  buyIcons.addEventListener('mouseover', function(){
    storeText.innerHTML = "Unlock Portraits to show off on your profile and in the Trainer Hub!"
  })
  buyIcons.addEventListener('mouseout', function(){
    storeText.innerHTML = "Welcome to the PokéMart!"
  })

  buyCards.addEventListener('mouseover', function(){
    storeText.innerHTML = "Purchase Pokémon Cards and build up your collection!"
  })
  buyCards.addEventListener('mouseout', function(){
    storeText.innerHTML = "Welcome to the PokéMart!"
  })

  buyIcons.addEventListener('click', function(){
    iconSelection.style.display = "block"
    cardSelection.style.display = "none"
  })
  buyCards.addEventListener('click', function(){
    iconSelection.style.display = "none"
    cardSelection.style.display = "flex"
  })
})
