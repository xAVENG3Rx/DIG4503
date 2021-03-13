import Express from 'express';
const App = Express();
const port = 45030;

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'
];

App.get('/people/:person', (req, res) => {
    let name = req.params.person;
    if (names.includes(name)){
        res.json({ Name: name});
    } else {
        res.json({name: "not found"});
    }
});

App.get('/search/:name' , (req, res) => {
    const result = names.filter(str => str.includes(req.params.name));

    if (result !=0) {
        res.json({search: result});
    } else {
        res.json({ search: "not found"});
    }
});

App.listen(port, () => {

});