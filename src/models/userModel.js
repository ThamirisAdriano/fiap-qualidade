// Simulando um banco de dados simples em memória
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

module.exports = { create, findById, updateById };
