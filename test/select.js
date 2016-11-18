var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-1.11.3.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(".button").change(function(){
    var buttonClass = $(this).attr("class");
    console.log(buttonClass);
});