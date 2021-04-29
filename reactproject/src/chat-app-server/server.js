const express = require('express')
var cors = require('cors')
const app = express()
const ChatApi = require('./db/chatAPI.js')
const port = 8020

app.use(cors());
app.use(express.json());

const chatApi = new ChatApi();

app.get('/setup-db', async (req, res) => {
  chatApi.migrate();
  try {
      res.send('Successfully setup DB tables')
  } catch (e) {
      res.send(e);
  }
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body
  const result = await chatApi.login({ email, password });

  res.send(result);
})

app.get('/user', async (req, res) => {
  const result = await chatApi.getAllUsers();
  res.send(result);
})

app.get('/user/:id', async (req, res) => {
  const result = await chatApi.getUser(req.params.id);
  res.send(result);
})

app.post('/user', async (req, res) => {
    const user = req.body
    const result = await chatApi.createUser(user);
    res.send(result);
})

app.put('/user/:id', async (req, res) => {
    const user = req.body
    console.log('USER', user)
    const result = await chatApi.updateUser(req.params.id, user);
    res.send(result);
})

const messages = []

app.get('/channel-messages/:channelId', (req, res) => {
  res.send(messages)
})

app.post('/channel-messages/:channelId', (req, res) => {
  messages.push({...req.body, id: messages.length + 1});
  res.send(messages);
})

app.delete('/channel-messages/:channelId/:messageId', (req, res) => {
  const foundMessageIndex = messages.findIndex(({ id }) => +req.params.messageId === id);
  if (foundMessageIndex > -1) {
    messages.splice(foundMessageIndex, 1);
  }
  res.send(messages);
})

app.listen(port, () => {
  console.log(`Chat app listening at http://localhost:${port}`)
})