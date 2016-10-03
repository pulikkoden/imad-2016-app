var button = document.getElementById('counter');
var counter= 0;
button.onClick = function(){
    
    //send request for counter to server
    
    //capture the response
    
    //render the resonse to span element
    
    counter = counter +1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};
