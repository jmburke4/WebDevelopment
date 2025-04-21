var boundX = 9;
var boundY = 9;

var locX = 3;
var locY = 3;

$(window).on('load', function(){
    LoadGameGrid(boundX, boundY);
    GoToSquare(locX, locY);
});

document.addEventListener('keydown', function(event) {
    switch (event.key) {
      case 'ArrowUp':
        // Action for up arrow key press
        //console.log('Up arrow key pressed');
        GoToSquare(locX, locY - 1);
        break;
      case 'ArrowDown':
        // Action for down arrow key press
        //console.log('Down arrow key pressed');
        GoToSquare(locX, locY + 1);
        break;
      case 'ArrowLeft':
        // Action for left arrow key press
        //console.log('Left arrow key pressed');
        GoToSquare(locX - 1, locY);
        break;
      case 'ArrowRight':
        // Action for right arrow key press
        //console.log('Right arrow key pressed');
        GoToSquare(locX + 1, locY);
        break;
    }
  });
  

function LoadGameGrid(x, y){
    let tbl = '<table>';
    for (let i = 0; i < y; i++){
        tbl += '<tr>';
        for (let j = 0; j < x; j++){
            tbl += `<td id='tdx${j}y${i}'></td>`;
        }
        tbl += '</tr>'
    }
    tbl += '</tr>';
    $('#divGameGrid').html(tbl);
}

function GoToSquare(x, y){
    $(`#tdx${locX}y${locY}`).css('background-color', 'white');
    if (x < boundX && x >= 0) locX = x; //else console.log(`${x} outside of bound ${boundX}`);
    if (y < boundY && y >= 0) locY = y; //else console.log(`${y} outside of bound ${boundY}`);
    $(`#tdx${locX}y${locY}`).css('background-color', 'red');
}