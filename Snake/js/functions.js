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
  $(`#tdx${locX}y${locY}`).removeClass('active');
  if (x < boundX && x >= 0) locX = x; //else console.log(`${x} outside of bound ${boundX}`);
  if (y < boundY && y >= 0) locY = y; //else console.log(`${y} outside of bound ${boundY}`);
  $(`#tdx${locX}y${locY}`).addClass('active');
}