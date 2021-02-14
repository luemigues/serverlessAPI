const express = require('express')
const app = express()
// const serverless = require('serverless-http')
const configRoutes = require('./route/configRoutes')

// Routes
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use('/search', configRoutes);

const port = process.env.PORT || 3003
app.listen(port, () => console.log(`Server started on port ${port}`))


// module.exports.handler = serverless(app)