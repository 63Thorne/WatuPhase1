const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');


const { ensureAuthenticated } = require('../config/auth')
const paypal = require('paypal-rest-sdk');
const { authUser } = require('../config/basicAuth')


// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

// Welcome Page
router.get('/NewPage', (req, res) => res.render('NewPage'));

// Login Page
router.get('/login', (req, res) => res.render('login'));


// Welcome Page
router.get('/PaymentDetails', (req, res) => res.render('PaymentDetails'));

//Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => 
res.render('dashboard', {
    name: req.user.name
}));

//  Northlink
router.get('/northlink', (req, res) => 
{res.render('northlink')
});

//  PR
router.get('/PR', (req, res) => res.render('PR'));

//  PMN4
router.get('/PMN4', (req, res) => res.render('PMN4'));

//  PMN5
router.get('/PMN5', (req, res) => res.render('PMN5'));

//  PMN6
router.get('/PMN6', (req, res) => res.render('PMN6'));

//Paying User
const Payer = require('../models/Payer')

//Purchase info
router.post('/purchase', (req, res) => {
const { Fullname,Surname, EmailAddress, Cellnumber} = req.body;
let errors =  [];
 
// Check required fields

if(!Fullname || !Surname || !EmailAddress  || !Cellnumber) {
    errors.push({msg: 'Please fill in all fields'});
}

// Check pass length


if(errors.length > 0) {
res.render('purchase', {
    errors,
    Fullname,
    Surname,
    EmailAddress,
    Cellnumber
}); 

} else {
  //Validation passed

  Payer.findOne({ EmailAddress: EmailAddress})
  .then(user => {
      if(user) {
          // User Exists
          errors.push({ msg: 'Email is already in use'})
          res.render('purchase', {
              errors,
              Fullname,
              Surname,
              EmailAddress,
              Cellnumber
          });

      } else {
          const newPayer = new Payer({ 
              Fullname,
              Surname,
              EmailAddress,
              Cellnumber
          });
// Hashed Password
bcrypt.genSalt(10, (err, salt)=> bcrypt.hash(newPayer.Cellnumber, salt, (err,hash) => {
  if(err) throw err;
//Set password to hashed
  

  // Save user
  newPayer.save()
  .then(user => {
      req.flash('success_msg', 'You are now registered and can log in');
      res.redirect('/PaymentDetails');
  })
  .catch(err => console.log(err));
}))

      }

  });
}
});



  




module.exports = router;