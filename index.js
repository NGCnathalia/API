require('dotenv').config()
const exress = require('express')
const cors = require('cors')
const app = exress()
const { dbConnect } = require('./config/mongo')

const PORT = process.env.PORT || 3000
app.use(cors())
app.use(exress.json())

app.use('/api/1.0', require('./app/routes'))

dbConnect()
app.listen(PORT, () => {
    console.log('API lista por el puerto ', PORT)
})
