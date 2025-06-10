
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');

    function swapColors() {
      const leftColor = leftButton.style.backgroundColor;
      const rightColor = rightButton.style.backgroundColor;

      leftButton.style.backgroundColor = rightColor;
      rightButton.style.backgroundColor = leftColor;

      leftButton.textContent = getColorName(rightColor);
      rightButton.textContent = getColorName(leftColor);
    }

    function getColorName(color) {
      switch (color) {
        case 'red': return 'אדום';
        case 'blue': return 'כחול';
        case 'green': return 'ירוק';
        case 'yellow': return 'צהוב';
        case 'purple': return 'סגול';
        case 'orange': return 'כתום';
        default: return color;
      }
    }

    leftButton.addEventListener('click', swapColors);
    rightButton.addEventListener('click', swapColors);
