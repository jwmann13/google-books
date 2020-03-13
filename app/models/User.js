const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const emailValidator = require("email-validator");
const bcrypt = require("bcryptjs");
const SALT_ROUNDS = 12;

const UserSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
    index: { unique: true },
    minlength: 3
  },
  email: {
    type: Schema.Types.String,
    required: true,
    validate: {
      validator: emailValidator.validate,
      message: props => `${props.value} is not a valid Email Address`
    }
  },
  password: { type: Schema.Types.String, required: true, trim: true, minlength: 8 }
});

UserSchema.pre("save", async function preSave(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    try {
        const hash = await bcrypt.hash(user.password, SALT_ROUNDS);
        user.password = hash;
        return next();
    } catch (err) {
        return next(err);
    }
});

UserSchema.methods.comparePassword = async function(candidate) {
    return bcrypt.compare(candidate, this.password);
}

const User = model("User", UserSchema);
module.exports = User;
