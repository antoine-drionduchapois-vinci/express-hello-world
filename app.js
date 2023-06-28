const express = require('express');
const session = require('express-session');
const router = express.Router();
const User = require('../express-hello-world/models/User.js');
const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));






app.get('/', (req, res) => {
  console.log('test');
  res.render('password.hbs');
});

router.get('/1', (req, res) => {
  console.log("mdp")
 res.render('password.hbs')
});

app.post('/password', (req, res) => {
  console.log('test');
 if (req.body.password === "pourtoujours"){
    console.log('test2')
     session.day = "zondag";
     console.log(session.day)
     res.redirect('/home')
 }else if (req.body.password === "amour"){
     session.day = "zaterdag";
     console.log(session.day)
     res.redirect('/home')
     
 }
 else {
     res.render('password.hbs', {answer : 'slecht wachtwoord'})
 }


res.render('password.hbs')
});




app.get('/home', (req, res) => {

 if (session.day === "zaterdag"){
     res.render('home.hbs', {day : true})
 }else {
     res.render('home.hbs', {day : false})
 }

});



app.get('/rsvp', (req, res) => {

 

 console.log(session.day)
 res.render('rsvp.hbs')
});

app.get('/dresscode', (req, res) => {
 
res.render('dresscode.hbs')
});


app.post('/add', (req, res) => {
 
 console.log('test')
 User.add_answer(req.body.firstname, req.body.lastname, req.body.answer,req.body.email ,req.body.word, session.day);
 


 
 res.render('final.hbs')
});



app.get('/backOffice', (req, res) => {
 
 console.log('backoffice')
 
 


 
 res.render('backOffice', {selectAll : User.selectAll()})
});


app.get('/saturday', (req, res) => {
 
 console.log('backoffice')
 
 
 
 res.render('backOffice', {selectAll : User.selectSaturday})
});



app.get('/sunday', (req, res) => {
 
 console.log('backoffice')
 
 
 
 res.render('backOffice', {selectAll : User.selectSunday})
});



const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = router;







