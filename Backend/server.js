const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();

// --- MIDDLEWARES ---
app.use(express.json());

// --- CORS UPDATE ---
// Ginawa nating simple ito para payagan ang kahit anong URL ng frontend mo
// Ito ang mag-aayos sa "Blocked by CORS policy" error
app.use(cors()); 

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

// Health Check Route (Para makita kung running ang server)
app.get("/", (req, res) => {
    res.send("🚀 Library API is running and connected to MongoDB!");
});

// REGISTER
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        
        // Check muna kung may account na ang email na ito
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Email already taken" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, role });
        await newUser.save();
        res.json({ message: "Account Created Successfully!" });
    } catch (e) { 
        res.status(500).json({ message: "Error in registration" }); 
    }
});

// LOGIN
app.post('/api/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).json({ message: "User not found" });
        
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid Password" });
        
        res.json({ user });
    } catch (e) {
        res.status(500).json({ message: "Login Error" });
    }
});

// BOOKS MANAGEMENT
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

// --- SERVER LISTENER PARA SA RENDER ---
const PORT = process.env.PORT || 10000; 

// Ang '0.0.0.0' ay kailangan para ma-detect ni Render ang iyong service
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is officially running on port ${PORT}`);
});