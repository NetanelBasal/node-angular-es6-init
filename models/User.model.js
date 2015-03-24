var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var validate = require('mongoose-validator');

var Schema = mongoose.Schema;

/* ===============
 mongoose-validator 
 =============== */
var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [2, 50],
    message  : 'Name should be between 2 and 50 characters'
  })
];

var emailValidator = [
  validate({
    validator  : 'isEmail',
    passIfEmpty: true,
    message    : 'This is not valid email'
  })
];

var passwordValidator = [
  validate({
    validator: 'isLength',
    arguments: [6, 10],
    message  : 'Password should be between 6 and 10 characters'
  })
];

/* ===============
 User schema 
 =============== */

var UserSchema = new Schema({
  local   : {
    email    : {
      type    : String,
      unique  : false,
      validate: emailValidator
    },
    firstName: {
      type    : String,
      validate: nameValidator
    },
    password : {
      type    : String,
      validate: passwordValidator
    }
  },
  facebook: {
    id   : String,
    email: {
      type  : String,
      unique: false
    },
    name : String
  },
  google  : {
    id   : String,
    email: {
      type  : String,
      unique: false
    },
    name : String
  }
});

/* ===============
 Methods 
 =============== */

UserSchema.methods.generateHash = function( password ) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function( password ) {
  return bcrypt.compareSync(password, this.local.password);
};

UserSchema.pre('save', function( next ) {
  if( this.local.password ) {
    this.local.password = this.generateHash(this.local.password);
  }
  next();
});

/* ===============
 Delete password on return user 
 =============== */
UserSchema.set('toJSON', {
  transform: function( doc, user ) {
    delete user.local.password;
    return user;
  }
});

/* ===============
 Validations 
 =============== */

UserSchema.path('local.email').validate(function( email, done ) {
  if( email ) {
    this.model('User').count({ 'local.email': email }, function( err, count ) {
      if( err ) {
        return done(err);
      }
      // need to return false if failed
      done(!count);
    });
  }

}, 'Email already exists');

/* ===============
 drop index because of the email duplicate problem
 =============== */
mongoose.model('User', UserSchema).collection.dropAllIndexes(function( err, results ) {
  if( err ) console.log(err);
});

module.exports = mongoose.model('User', UserSchema);