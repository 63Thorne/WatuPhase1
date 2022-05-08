const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');


const { ensureAuthenticated } = require('../config/auth')
const paypal = require('paypal-rest-sdk');
const { authUser } = require('../config/basicAuth')


// Welcome Page
router.get('/', (req, res) => res.render('northlink'));
  
// EBMN5
router.get('/EBMN5', (req, res) => res.render('EBMN5'));



// Welcome Page
router.get('/PaymentDetails', (req, res) => res.render('PaymentDetails'));

//  Submit Notes
router.get('/SubmitNotes', (req, res) => res.render('sm'));

//  PR
router.get('/PM', (req, res) => res.render('PM'));

//  PR
router.get('/PM6', (req, res) => res.render('PM6'));

//  PR
router.get('/PR', (req, res) => res.render('PR'));

//  PMN4
router.get('/PMN4', (req, res) => res.render('PMN4'));

//  PMN5
router.get('/PMN5', (req, res) => res.render('PMN5'));

//  PMN6
router.get('/PMN6', (req, res) => res.render('PMN6'));

//  Governance
router.get('/Gov', (req, res) => res.render('Gov'));



//  RandomNotes
router.get('/RandomNotes', (req, res) => res.render('RandomNotes'));


//Paying User
const Payer = require('../models/Payer')

//Purchase info
router.post('/purchase', (req, res) => {
const { Fullname,Surname, EmailAddress, Cellnumber, Institution} = req.body;
let errors =  [];
 
// Check required fields

if(!Fullname || !Surname || !EmailAddress  || !Cellnumber || !Institution) {
    errors.push({msg: 'Please fill in all fields'});
}

// Check pass length


if(errors.length > 0) {
res.render('purchase', {
    errors,
    Fullname,
    Surname,
    EmailAddress,
    Cellnumber,
    Institution,
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
              Cellnumber,
              Institution,
          });

      } else {
          const newPayer = new Payer({ 
              Fullname,
              Surname,
              EmailAddress,
              Cellnumber,
              Institution,
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