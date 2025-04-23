$(window).on('load', function(){
  LoadGameGrid(_boundX, _boundY);
  GoToSquare(_locX, _locY);
});

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'ArrowUp':
      if (_direction != 'Down') _direction = 'Up';
      break;
    case 'ArrowDown':
      if (_direction != 'Up') _direction = 'Down';
      break;
    case 'ArrowLeft':
      if (_direction != 'Right') _direction = 'Left';
      break;
    case 'ArrowRight':
      if (_direction != 'Left') _direction = 'Right';
      break;
  }
});

$('#btnStop').click(function(){
  // To stop the interval after x seconds:
  setTimeout(function() {
    clearInterval(_timer);
    console.log("Interval stopped");
  }, 0);
});

$('#btnStart').click(function(){
  // Start the timer at the rate of _tick_ms
  _timer = setInterval(function(){
    _ticks++;
    $('#lblTimer').text(_ticks);
    Advance();
  }, _tick_ms);
});