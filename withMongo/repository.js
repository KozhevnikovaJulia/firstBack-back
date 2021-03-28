const fs = require('fs');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String
});
const User = mongoose.model('myUser', userSchema);


const getUsers = (search) => {
    if (!search) {
        return User.find()
    } else {
        return User.find({ name: new RegExp(search) })
    }
}
const getUser = (id) => {
    return User.find({_id : id})
}
const addUser = async (name) => {
    const user = new User({ name })
    return user.save();
}
const deleteUser = async (id) => {
    return User.deleteOne({ _id : id })
}
const updateUser = async (id, name) => {
    return User.updateOne({ _id : id }, {name : name})
}

exports.getUsers = getUsers
exports.addUser = addUser
exports.deleteUser = deleteUser
exports.getUser = getUser
exports.updateUser = updateUser