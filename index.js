const express = require('express')
const app = express()
const port = 3000

function Movie(name) {
  this.name = name

}



app.get('/', (req, res) => {
  res.send('Hello World!')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = {
  Movie
}

