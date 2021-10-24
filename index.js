const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;
app.get('/', (req, res) => {
    res.send('Wow!!!Im Excited to learning node');
});
const users = [
    { id: 0, name: 'Shabana', email: 'shabana@gmail.com' },
    { id: 1, name: 'Shabnur', email: 'shabana@gmail.com' },
    { id: 2, name: 'Soniya', email: 'shabana@gmail.com' },
    { id: 3, name: 'Bobita', email: 'shabana@gmail.com' },
    { id: 4, name: 'Purnima', email: 'shabana@gmail.com' }
];
// use query parameter
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

});
//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send('post got hitted')
    res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})
app.listen(port, () => {
    console.log('Listening to port', port);
})