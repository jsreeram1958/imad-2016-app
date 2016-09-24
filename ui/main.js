console.log('Loaded!');
//change the text of main-text
var element = document.getElementById('main-text');
element.innerHTML = "New Value 1";

//move the image
var img = document.getElementById('madi');



img.onclick = function () {
    img.style.marginLeft = '100px';
    
};