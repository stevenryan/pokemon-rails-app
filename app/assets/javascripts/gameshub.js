window.addEventListener('load', () => {
  console.log('this is the loading page')
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

  function onClick(e) {
    console.log(e)
    e.stopPropagation();

    var t = e.target;
    if (t.tagName.toUpperCase() != 'BUTTON')
      return;

      if (t.classList.contains('next')) {
        console.log('whatever +')
        currImage++;
      }
      else {
        console.log('whatever -')
        currImage--;
      }

    rotateCarousel(currImage);
  }

	function rotateCarousel(imageIndex) {
		figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
	}

}
