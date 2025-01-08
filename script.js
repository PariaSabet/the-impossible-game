$(document).ready(function(){
    animateDiv('.s');
    animateDiv('.p');
    animateDiv('.a');
    animateDiv('.c');
    animateDiv('.e');
});

function makeNewPosition($game) {
    $game = ($game || $(window))
    var h = $game.height() - 100;
    var w = $game.width() - 100;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];
}

function animateDiv(myClass){
    var newPosition = makeNewPosition();
    $(myClass).animate({ top: newPosition[0], left: newPosition[1] }, 1000, function(){
        animateDiv(myClass);        
    });
}

function takeScreenshot() { 
    let div = document.getElementById('game'); 
    html2canvas(div).then(function (canvas) { 
        document.getElementById('output').appendChild(canvas); 
        alert('Screenshot taken!');
    }).catch(function(error) {
        console.error('Screenshot failed:', error);
    });
}