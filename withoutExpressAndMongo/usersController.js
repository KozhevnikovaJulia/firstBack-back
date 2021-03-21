const { getUsers, addUser } = require('./repository');

exports.usersController = async (req, res) => {
    if (req.method === 'POST') {
        let response = await addUser('Julia')
        res.write(JSON.stringify({ success: true }))
        res.end();
    } else {
        let users = await getUsers();
        res.write(JSON.stringify(users));
        res.end();
        }        
    }

