let express = require('express')
let app = express()

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello thered!' })
})

app.listen(3000)
console.log('Express server listening on port 3000')