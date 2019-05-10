const express = require('express')
const connectDB = require('./config/db')

const app = express();

// Connect DB
connectDB();

// Init Middleware
// Already part of Express now, don't need to install body parser
app.use(express.json({extended: false}))

app.get('/', (req, res) => {
  res.send(`Api Running on port ${PORT}`)
})

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
