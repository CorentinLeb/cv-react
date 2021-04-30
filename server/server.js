const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const {checkUser} = require('./middleware/auth.middleware');
require('dotenv').config({path: 'config/.env'});
require('./config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*', checkUser);


// routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

app.listen(5001, () => {
    console.log(`listening on port ${process.env.PORT}`);
})