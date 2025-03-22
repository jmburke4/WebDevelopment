
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
    const path = window.location.pathname; 
    const root = path.substring(0, (path.indexOf('WebDevelopment') + 14))
    console.log(`path: ${path}`);
    console.log(`root: ${root}`);

    const header = document.createElement('div');
    header.id = 'header';
    document.head.appendChild(header);

    $('#header').load(`${root}/Test/Shared/include.html`); 
    console.log('Loaded include.html');
});
