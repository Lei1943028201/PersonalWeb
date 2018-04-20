/**
 * Created by huayu on 2018/4/20.
 */
let express = require('express')
let app = express()

app.use(express.static('./dist'))

app.get('/', function (req, res) {
  res.send('Hello Vue')
})

app.listen(8888)