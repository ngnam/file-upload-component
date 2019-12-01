const express = require('express')
const server = express()
const cors = require('cors')
const upload = require('./upload')
const path = require('path');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

server.use(cors(corsOptions))

server.get('/', function (req, res){
  res.sendFile(__dirname + '/index.html');
});

server.use('/static', express.static(path.join(__dirname, 'uploads')))

server.post('/upload', upload)

server.listen(8000, () => {
  console.log('Server started!')
})
