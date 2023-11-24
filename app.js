const express= require('express');
const app=express();

app.get('/', (req, res) => {
    res.send('Welcome to the user management app!');
});

app.get('/create', (req, res) => {
    res.send('Created a new user Pranjal Bankawat!');
});

app.get('/read', (req, res) => {
    res.send('Reading the user.....<br/><br/>1. Pranjal Bankawat');
});

app.get('/update', (req, res) => {
    res.send('Updated the user Pranjal Bankawat to Pranjal');
});

app.get('/delete', (req, res) => {
    res.send('Deleted the user Pranjal');
});

const port=9000;
app.listen(port, () =>{
    console.log('Server started');
})