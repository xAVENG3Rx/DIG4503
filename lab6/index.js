const Express = require("express");
const App = Express();
const port = 1216;


App.get('/', function(request, response){
    response.send("Hello World!");
});

App.use('/public', Express.static("public"));

App.listen(port, function(){
    console.log("Server running!");
})
