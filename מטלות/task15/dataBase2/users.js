const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname)); 

mongoose.connect('mongodb+srv://yosefadmoni:passforSv@finalprojectserver.m1zmh.mongodb.net/usersDB')
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ Error connecting to MongoDB:', err));


const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        await newUser.save();
        console.log('✅ User created:', newUser);
        res.status(201).send('✅ User created successfully!');
    } catch (error) {
        console.error('❌ Error creating user:', error);
        res.status(500).send('❌ Error creating user.');
    }
});

app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
