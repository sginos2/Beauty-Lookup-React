const express = require('express')
var cors = require('cors')
const app = express()
const UserApi = require('./db/userAPI.js')
const port = 8020

app.use(cors());
app.use(express.json());

const userApi = new UserApi();

// userApi.createUser({
//   "firstName": "Shanna",
//   "lastName": "Ginos",
//   "email": "shannaginos@gmail.com",
//   "phone": "4352327661",
//   "password": "password"
// });

app.get('/setup-db', async (req, res) => {
  userApi.migrate();
  try {
      res.send('Successfully setup DB tables')
  } catch (e) {
      res.send(e);
  }
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body
  const result = await userApi.login({ email, password });

  res.send(result);
})

app.get('/user', async (req, res) => {
  const result = await userApi.getAllUsers();
  res.send(result);
})

app.get('/user/:id', async (req, res) => {
  const result = await userApi.getUser(req.params.id);
  res.send(result);
})

app.post('/user', async (req, res) => {
    const user = req.body
    const result = await userApi.createUser(user);
    res.send(result);
})

app.put('/user/:id', async (req, res) => {
    const user = req.body
    console.log('USER', user)
    const result = await userApi.updateUser(req.params.id, user);
    res.send(result);
})

app.listen(port, () => {
  console.log(`Beauty app listening at http://localhost:${port}`)
})