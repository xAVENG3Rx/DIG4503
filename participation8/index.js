import Express from 'express';
const App = Express();
const port = 1216;

//Dynamic route #1
App.get('/people/:person' , (req, res) => {
    res.json({Name: req.params.person});
    //type "/people/" and then a name of your choosing

});

//Dynamic route #2
App.get('/person/:id', (req,res) => {
    res.send("They're ID number is " + req.params.id);
})

App.listen(port, () => {

});

