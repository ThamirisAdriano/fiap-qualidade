const userModel = require('../models/userModel.js');

async function createUser(req, res) {
    try {
        const user = await userModel.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function getUser(req, res) {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function updateUser(req, res) {
    try {
      const updatedUser = await userModel.updateById(req.params.id, req.body);
      if (!updatedUser) {
        return res.status(404).send();
      }
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

module.exports = { createUser, getUser, updateUser };
