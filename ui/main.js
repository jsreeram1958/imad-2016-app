console.log('Loaded!');
//change the text of main-text
//var element = document.getElementById('main-text');
//element.innerHTML = "New Value 1";

//move the image
//var img = document.getElementById('madi');
//var marginLeft = 0;

//    function moveRight () {
//    marginLeft = marginLeft + 5;
//    img.style.marginLeft = marginLeft + 'px';
//    }
  
//    img.onclick = function () {		   
//      var interval = setInterval(moveRight,50); 
//    }; 		  

// Counter code

var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
    
    
    
    
    //render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = count.toString();
    
};