const express = require('express');
const userController = require('./controller/userController.js');

const app = express();
app.use(express.json());

// Middleware para verificar o token de autenticação
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token é necessário para autenticação');

  try {
    // Aqui você colocaria sua lógica de verificação de token
    // Por exemplo, usando jsonwebtoken para decodificar e verificar o token
    // const decoded = jwt.verify(token, 'seuSegredo');
    console.log('Token verificado com sucesso');
    next();
  } catch (error) {
    return res.status(401).send('Token inválido');
  }
}

app.post('/users', userController.createUser);
app.post('/users/register', userController.createUser);
app.get('/users/:id', userController.getUser);
app.put('/users/:id', userController.updateUser);
app.post('/users/login', userController.loginUser);

// Rota protegida que requer autenticação via token
app.get('/some-protected-route', verifyToken, (req, res) => {
  res.send('Você acessou uma rota protegida');
});

module.exports = app;
