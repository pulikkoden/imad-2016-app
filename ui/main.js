var button = document.getElementById('counter');
button.onclick = function(){
    
    //send request for counter to server
    var request = new XMLHttpRequest();
    
    //capture the response
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                //render the resonse to span element
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    //make the request
    request.open('GET','http://pulikkoden.imad.hasura-app.io/counter', true);
    request.send(null);
    
    
    
    
};
