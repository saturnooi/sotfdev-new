const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema

const userSchema = new Schema({
  firstname: {
    type: String,
    required: [true, 'Please tell us your name'],
    minlength: 3,
    maxLength: 64
  },
  lastname: {
    type: String,
    required: [true, 'Please tell us your lastname'],
    minlength: 3,
    maxLength: 64
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    maxlength: 64,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: true,
    validator: function (el) {
      // This only works on CREATE and SAVE!!!
      return el === this.password;
    },
    message: 'Password are not the same!'
  },
  telephone: {
    type: String,
    required: [true, 'Please provide your telephone number'],
    minlength: 10,
    maxlength: 10
  },
  birthday: {
    type: Date,
    required: [true]
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'system'],
    default: 'user'
  },
  photo: {
    type: String,
    default: 'default.jpg'
  },
  wallet: {
    type: Number,
    default: 0
  },
  history: {
    type: [String]
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
})

userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};


const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel