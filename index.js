const app = require('express')();
const http = require('http').Server(app);

// HTML FILES
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  })

//CSS FILES
// JAVASCRIPT FILES 
// IMAGES FILES



http.listen(3000, () => {
    console.log('listening on *:3000');
});