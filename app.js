import express from 'express'
import cors from 'cors'
import path from 'path'

const app = express()
const PORT = 3000
const dirname = path.resolve()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(dirname, 'src/pages/index.html'))
})

app.listen(PORT, () => {
  console.log('server running on port 3000')
})
