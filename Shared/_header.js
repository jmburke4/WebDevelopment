function loadJQuery(callback) {
    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
      callback();
    };
    document.head.appendChild(script);
}

loadJQuery(function() {
    const header = document.createElement('div');
    header.id = '_header';
    document.body.appendChild(script);

    // After jQuery is loaded, try loading the source file
    $("#_header").load("_header.html"); 
    console.log("Shared header loaded!");
  });


