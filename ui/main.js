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
    
   //Create a request object
   var request = new XMLhttpRequest();
   
   //Capture the request and store in a variable
   request.onreadystatechange = function () {
      if (request.readyState == XMLhttpRequest.DONE) {
        if (request.status == 200) {
             var counter = request.responseText;
             var span = document.getElementById('count');
             span.innerHTML = counter.toString(); 
        }
        }

};

    //Make a request
    request.open ('GET', 'http://jsreeram1958.imad.hasura-app.io/counter', true);
    request.send(null);

};