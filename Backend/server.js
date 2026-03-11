const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();

// --- MIDDLEWARES ---
app.use(express.json());

// --- CORS UPDATE ---
// Pinapayagan nito ang iyong Render frontend na makipag-usap sa backend
app.use(cors({
    origin: "https://library-frontend-fpbs.onrender.com", 
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true
}));

// --- DATABASE CONNECTION ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Library Database Connected'))
    .catch(err => console.log('❌ Connection Error:', err));

// --- MODELS ---
const User = mongoose.model('User', new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'student' } 
}));

const Book = mongoose.model('Book', new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
    dateAdded: { type: Date, default: Date.now }
}));

// --- ROUTES ---
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, role });
        await newUser.save();
        res.json({ message: "Account Created!" });
    } catch (e) { res.status(400).json({ message: "Email exists" }); }
});

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Password" });
    res.json({ user });
});

app.get('/api/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

app.post('/api/books', async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.json(book);
});

app.delete('/api/books/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

app.patch('/api/books/:id', async (req, res) => {
    const updated = await Book.findByIdAndUpdate(req.params.id, { isAvailable: req.body.isAvailable }, { new: true });
    res.json(updated);
});

// Health Check Route
app.get("/", (req, res) => {
    res.send("🚀 Library API is running and connected to MongoDB!");
});

// --- SERVER LISTENER UPDATE PARA SA RENDER ---
const PORT = process.env.PORT || 10000; 

// Napaka-importante ng '0.0.0.0' para mabasa ni Render ang port mo
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is officially running on port ${PORT}`);
});