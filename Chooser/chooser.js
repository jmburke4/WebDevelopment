
$( window ).on( "load", function() {
    const element = document.getElementById('_body');

    element.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    //console.log('Touch start:', x, y);
    $('#lblFeedback').text('Touch start:', x, y)
    }, false);

    element.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    //console.log('Touch move:', x, y);
    $('#lblFeedback').text('Touch move:', x, y)
    }, false);

    element.addEventListener('touchend', (event) => {
    //console.log('Touch end');
    $('#lblFeedback').text('Touch end')
    }, false);
});

