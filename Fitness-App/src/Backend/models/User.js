import mongoose from 'mongoose';
import bcrypt from 'bcrypt'; // For password hashing

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address'] // regex for email validation
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, 
    minlength: [6, 'Username must be at least 6 characters long']
  },
  password: {
    type: String,
    required: true,
    minlength: [9, 'Password must be at least 9 characters long']
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // only hash if password has changed or is new
  try {
    const salt = await bcrypt.genSalt(10); // generate salt
    this.password = await bcrypt.hash(this.password, salt); 
    next();
  } catch (err) {
    next(err);
  }
});

// compare passwords
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
