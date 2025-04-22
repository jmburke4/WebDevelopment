$(window).on('load', function(){
  LoadGameGrid(boundX, boundY);
  GoToSquare(locX, locY);
});

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'ArrowUp':
      //console.log('Up arrow key pressed');
      GoToSquare(locX, locY - 1);
      break;
    case 'ArrowDown':
      //console.log('Down arrow key pressed');
      GoToSquare(locX, locY + 1);
      break;
    case 'ArrowLeft':
      //console.log('Left arrow key pressed');
      GoToSquare(locX - 1, locY);
      break;
    case 'ArrowRight':
      //console.log('Right arrow key pressed');
      GoToSquare(locX + 1, locY);
      break;
  }
});
