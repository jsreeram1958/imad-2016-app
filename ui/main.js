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

var nameinput = getElementById('name');
var name = nameinput.value;
var submit = getElementById('submit_btn');

submit.onclick = function () {
  var names = ['name1', 'name2', 'name3', 'name4'];
  var list = '';
  
  for (var i=0; i < names.length; i++) {
      list += '<li>' + name(i) +'</li>';
  }
  
  var ul = getElementById('namelist');
  ul.innerHTML = list;
    
};










