const fs = require('fs');
const { readJsonFromFile, writeJsonToFile } = require('./fs-utils');

const getUsers = () => {
    return readJsonFromFile('./withoutMongo/users.json')
}
const addUser = async (name) => {
    let users = await getUsers();
    users.push({ name: name });    
   return writeJsonToFile('./withoutMongo/users.json', users)
}

exports.getUsers = getUsers
exports.addUser = addUser