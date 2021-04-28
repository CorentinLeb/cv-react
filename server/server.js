require('dotenv').config({path: 'config/.env'});
const express = require('express');
const userRoutes = require('./routes/user.routes');
require('./config/db');
const {checkUser} = require('./middleware/auth.middleware');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*', checkUser);

// routes
app.use('/api/user', userRoutes);

app.listen(5000, () => {
    console.log(`listening on port ${process.env.PORT}`);
})