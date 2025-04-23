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
  $(`#tdx${_locX}y${_locY}`).removeClass('active');
  if (x < _boundX && x >= 0) _locX = x; //else console.log(`${x} outside of bound ${boundX}`);
  if (y < _boundY && y >= 0) _locY = y; //else console.log(`${y} outside of bound ${boundY}`);
  $(`#tdx${_locX}y${_locY}`).addClass('active');
}

function Advance(){
  switch (_direction) {
    case 'Up':
      if (_locY - 1 > -1) GoToSquare(_locX, _locY - 1);
      break;
    case 'Down':
      if (_locY + 1 < _boundY) GoToSquare(_locX, _locY + 1);
      break;
    case 'Left':
      if (_locX - 1 > -1) GoToSquare(_locX - 1, _locY);
      break;
    case 'Right':
      if (_locX + 1 < _boundX) GoToSquare(_locX + 1, _locY);
      break;
  }
}

function GameOver(){

}