
// Load jQuery into the source document that references this script
function loadJQuery(callback) {
    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        callback();
    };
    document.head.appendChild(script);
    console.log('Loaded jQuery');
}

// Now use jQuery to append the contents of _include.html to the header of the document
// referencing this file
loadJQuery(function() {
    console.log(window.location);

    const header = document.createElement('div');
    header.id = '_header';
    document.head.appendChild(header);

    $('#_header').load('Shared/_include.html'); 
    console.log('Loaded _include.html');
});
