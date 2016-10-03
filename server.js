var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne = {
  title:'Article one| Anil Varghese',
  heading:'Article one',
  date:'September 1 2016',
  content:`
     <p>
           This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.
     </p>
                <p>This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.
                </p>
                <p>This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.This is my content.
                </p>`
};

function createTemplate(data)
{
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = 
      `<html>
        <head>
            <title>
               ${title};
            </title>
        </head>    
        <body>
            <div>
                <a href="/"> HOME</a> 
                <h3>
                    ${heading}
                </h3>
                <div>${date}</div>
                <div>
                ${content};
                </div>
            </div>
        </body>
    </html>`

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var counter = 0;
app.get('/counter', function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/article-one', function(req,res){
    res.send(createTemplate(articleOne));
});

app.get('/article-two', function(req,res){
    res.send('article two will be served here');
});

app.get('/article-three', function(req,res){
    res.send('article three will be served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
