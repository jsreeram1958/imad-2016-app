console.log('Loaded!');
//change the text of main-text
var element = document.getElementById('main-text');
element.innerHTML = "New Value 1";

//move the image
var img = document.getElementById('madi');
var marginLeft = 0;

    function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
    }
  
    img.onclick = function () {		   
      var interval = setInterval(moveRight, 1); 
    }; 		  