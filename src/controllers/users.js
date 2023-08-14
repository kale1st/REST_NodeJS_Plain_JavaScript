const Users = require('../../data');

const getUsers = (req, res) => {
    res.status(200).send(Users);
}

const getUserById = (req, res) => {
    const id = req.params.id;
    try {
        const user = Users.find(u => u.id == id);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

const createUser = (req, res) => {
    try {
        const { username, city } = req.body;

        const id = Users.length + 1;
        const newUser = {
            id: id,
            username: username,
            city: city
        }
        Users.push(newUser);

        res.status(201).json(newUser); // Status code 201 indicates 'Created'
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

const updateUser = (req, res) => {
    const id = req.params.id;
    const { username, city } = req.body;

    try {
        const user = Users.find(u => u.id == id);

        if (user) {
            user.username = username;
            user.city = city;
            res.status(200).json({ message: 'User updated successfully', user });
        } else {
            res.status(404).json({ message: 'No user found with the provided ID' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const userIndex = Users.findIndex(u => u.id === id);
        if (userIndex !== -1) {
            Users.splice(userIndex, 1);
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'No user found with the provided ID' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser }