const users = {};

function create(userData) {
    const id = Date.now().toString();
    users[id] = { ...userData, id };
    return Promise.resolve(users[id]);
}

function findById(id) {
    return Promise.resolve(users[id] || null);
}

async function updateById(id, updateData) {
  if (!users[id]) {
    return null;
  }
  users[id] = {...users[id], ...updateData};
  return users[id];
}

function findByEmail(email) {
  return Promise.resolve(Object.values(users).find(user => user.email === email));
}

function validatePassword(user, password) {
  return Promise.resolve(user.password === password);
}

function generateAuthToken(user) {
  return Promise.resolve(`token-${user.id}`);
}


module.exports = { create, findById, updateById, validatePassword , findByEmail, generateAuthToken};
