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
//var counter = 10;

button.onclick = function () {
    
   //Create a request object
   var request = new XMLHttpRequest();
   
   //Capture the request and store in a variable
   request.onreadystatechange = function () {
      if (request.readyState == XMLHttpRequest.DONE) {
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

 
var submit = document.getElementById('submit_btn');

submit.onclick = function () {
    
     //Create a request object
   var request = new XMLHttpRequest();
   
   //Capture the request and store in a variable
   request.onreadystatechange = function () {
      if (request.readyState == XMLHttpRequest.DONE) {
        if (request.status == 200) {
            var names = request.responseText;
            names=JSON.parse(names);
            var list = '';
  
            for (var i=0; i < names.length; i++) {
                list += '<li>' + names[i] +'</li>';
             }
  
            var ul = document.getElementById('namelist');
            ul.innerHTML = list; 
         }
       }
};

 //Make a request
 
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open ('GET', 'http://jsreeram1958.imad.hasura-app.io/submit-name?name=' +name, true);
    request.send(null);
};







