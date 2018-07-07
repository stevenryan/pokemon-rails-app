window.addEventListener('load', () => {
	var
		carousels = document.querySelectorAll('.carousel')
	;

	for (let i = 0; i < carousels.length; i++) {
		carousel(carousels[i]);
	}

});

function carousel(root) {
	var
		figure = root.querySelector('figure'),
		navBttn = document.getElementById('gamesNav'),
    gameLink = document.getElementById("game-link"),
    description = document.getElementById("description"),
		images = figure.children,
		n = images.length,
		gap = root.dataset.gap || 0,
		bfc = 'bfc' in root.dataset,

		theta =  2 * Math.PI / n,
		currImage = 0
	;

	setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	window.addEventListener('resize', () => {
		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width))
	});

	setupNavigation();

	function setupCarousel(n, s) {
		var
			apothem = s / (2 * Math.tan(Math.PI / n))
		;

		figure.style.transformOrigin = `50% 50% ${- apothem}px`;

		for (var i = 0; i < n; i++)
			images[i].style.padding = `${gap}px`;
		for (i = 1; i < n; i++) {
			images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
			images[i].style.transform = `rotateY(${i * theta}rad)`;
		}
		if (bfc)
			for (i = 0; i < n; i++)
				 images[i].style.backfaceVisibility = 'hidden';

		rotateCarousel(currImage);
	}

	function setupNavigation() {
		navBttn.addEventListener('click', onClick, true);

	}
  var gameImage = 0;

  function onClick(e) {
    e.stopPropagation();

    var t = e.target;
      if (t.classList.contains('next')) {
        currImage++;
        if (gameImage != n-1){
          gameImage++;
          console.log(gameLink);
        } else {
          gameImage = 0;
          console.log(gameLink);
        }
      }
      else if (t.classList.contains('prev')) {
        currImage--;
        if (gameImage != 0){
          gameImage--;
          console.log(gameLink);
        } else {
          gameImage = n-1;
          console.log(gameLink);
        }
      } else {}
      if (gameImage == 0){
        gameLink.setAttribute("href", "/games/pokeclimb");
        description.innerHTML = "Tap/Click to Jump! Climb Bulbasaur's vines to reach high scores and collect coins! Avoid the other Pokémon!";
      } else if (gameImage == 1){
        gameLink.setAttribute("href", "/games/hangman");
        description.innerHTML = "Hangman!";
      } else {
        gameLink.setAttribute("href", "/games/ekans");
        description.innerHTML = "Snake!";
      }

    rotateCarousel(currImage);
  }

	function rotateCarousel(imageIndex) {
		figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
	}
}
