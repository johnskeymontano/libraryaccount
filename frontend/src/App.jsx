import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { 
  FaBook, FaPlus, FaTrash, FaSignOutAlt, FaBookOpen, 
  FaUser, FaEnvelope, FaLock, FaThLarge 
} from 'react-icons/fa';
import './App.css';

// DITO ANG PAGBABAGO: Babasahin na nito ang variable sa Render
const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// --- LOGIN PAGE ---
const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await axios.post(`${API}/login`, form);
            localStorage.setItem('lib_user', JSON.stringify(res.data.user));
            navigate('/dashboard');
        } catch (e) { 
            setError(e.response?.data?.message || "Invalid Credentials"); 
        }
    };

    return (
        <div className="lib-auth-bg">
            <div className="lib-card">
                <div className="auth-logo-box"><FaBookOpen size={35} color="white"/></div>
                <h2>Library Login</h2>
                {error && <p style={{color: 'red', fontSize: '13px'}}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="input-wrap">
                        <FaEnvelope className="input-icon"/>
                        <input className="lib-input" type="email" placeholder="Email Address" 
                            onChange={e=>setForm({...form, email:e.target.value})} required/>
                    </div>
                    <div className="input-wrap">
                        <FaLock className="input-icon"/>
                        <input className="lib-input" type="password" placeholder="Password" 
                            onChange={e=>setForm({...form, password:e.target.value})} required/>
                    </div>
                    <button type="submit" className="lib-btn">Sign In</button>
                </form>
                <p style={{fontSize: '14px', marginTop: '15px'}}>New student? <span onClick={()=>navigate('/register')} style={{color: '#4f46e5', cursor: 'pointer', fontWeight: '600'}}>Register here</span></p>
            </div>
        </div>
    );
};

// --- REGISTER PAGE ---
const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });

    const handleReg = async (e) => {
        e.preventDefault();
        try { 
            await axios.post(`${API}/register`, form); 
            alert("Account Created!"); 
            navigate('/'); 
        } catch (e) { 
            alert("Error in registration"); 
        }
    };

    return (
        <div className="lib-auth-bg">
            <div className="lib-card">
                <h2>Create Account</h2>
                <form onSubmit={handleReg}>
                    <div className="input-wrap">
                        <FaUser className="input-icon"/>
                        <input className="lib-input" placeholder="Full Name" onChange={e=>setForm({...form, name:e.target.value})} required/>
                    </div>
                    <div className="input-wrap">
                        <FaEnvelope className="input-icon"/>
                        <input className="lib-input" type="email" placeholder="Email Address" onChange={e=>setForm({...form, email:e.target.value})} required/>
                    </div>
                    <div className="input-wrap">
                        <FaLock className="input-icon"/>
                        <input className="lib-input" type="password" placeholder="Password" onChange={e=>setForm({...form, password:e.target.value})} required/>
                    </div>
                    <select className="lib-input" style={{paddingLeft: '12px'}} onChange={e=>setForm({...form, role:e.target.value})}>
                        <option value="student">Student</option>
                        <option value="admin">Admin (Librarian)</option>
                    </select>
                    <button type="submit" className="lib-btn">Register</button>
                </form>
                <p style={{fontSize: '14px', marginTop: '15px'}}>Have an account? <span onClick={()=>navigate('/')} style={{color: '#4f46e5', cursor: 'pointer', fontWeight: '600'}}>Login</span></p>
            </div>
        </div>
    );
};

// --- DASHBOARD (PORTAL STYLE) ---
const Dashboard = () => {
    const [user] = useState(JSON.parse(localStorage.getItem('lib_user')));
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({ title: '', author: '' });
    const navigate = useNavigate();

    const fetchBooks = async () => {
        try {
            const res = await axios.get(`${API}/books`);
            setBooks(res.data);
        } catch (err) { console.log(err); }
    };

    useEffect(() => { 
        if(!user) navigate('/');
        fetchBooks(); 
    }, [user, navigate]);

    const addBook = async (e) => {
        e.preventDefault();
        await axios.post(`${API}/books`, newBook);
        setNewBook({ title: '', author: '' });
        fetchBooks();
    };

    const deleteBook = async (id) => {
        if(window.confirm("Delete book?")) {
            await axios.delete(`${API}/books/${id}`);
            fetchBooks();
        }
    };

    const toggleAvailability = async (id, status) => {
        await axios.patch(`${API}/books/${id}`, { isAvailable: !status });
        fetchBooks();
    };

    return (
        <div className="dashboard-layout">
            <aside className="lib-sidebar">
                <div className="sidebar-brand"><FaBookOpen/> LibPortal</div>
                <div className="nav-item active"><FaThLarge/> Dashboard</div>
                <div className="nav-item"><FaBook/> My Books</div>
                <div className="nav-item"><FaUser/> Profile</div>
                
                <div style={{marginTop: 'auto'}}>
                    <div className="nav-item" onClick={()=>{localStorage.removeItem('lib_user'); navigate('/')}}>
                        <FaSignOutAlt/> Logout
                    </div>
                </div>
            </aside>

            <main className="main-content">
                <nav className="lib-navbar">
                    <div style={{fontWeight: 'bold'}}>Library Management</div>
                    <div>Welcome, <strong>{user?.name}</strong></div>
                </nav>

                <div className="dashboard-content">
                    {user?.role === 'admin' && (
                        <div style={{background: 'white', padding: '20px', borderRadius: '12px', marginBottom: '25px'}}>
                            <h3><FaPlus/> Add New Book</h3>
                            <form onSubmit={addBook} style={{display: 'flex', gap: '10px'}}>
                                <input className="lib-input" style={{paddingLeft: '12px'}} value={newBook.title} placeholder="Book Title" 
                                    onChange={e=>setNewBook({...newBook, title:e.target.value})} required/>
                                <input className="lib-input" style={{paddingLeft: '12px'}} value={newBook.author} placeholder="Author" 
                                    onChange={e=>setNewBook({...newBook, author:e.target.value})} required/>
                                <button type="submit" className="lib-btn" style={{width: '150px', marginTop: '10px'}}>Add Book</button>
                            </form>
                        </div>
                    )}

                    <h3>Books Collection</h3>
                    <div className="library-grid">
                        {books.map(book => (
                            <div key={book._id} className="book-item">
                                <h4>{book.title}</h4>
                                <p style={{color: '#64748b'}}>By {book.author}</p>
                                <p className={book.isAvailable ? 'status-ok' : 'status-none'}>
                                    {book.isAvailable ? '• Available' : '• Borrowed'}
                                </p>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px'}}>
                                    <button className="borrow-btn" onClick={()=>toggleAvailability(book._id, book.isAvailable)}>
                                        {book.isAvailable ? 'Borrow' : 'Return'}
                                    </button>
                                    {user?.role === 'admin' && (
                                        <button className="del-btn" onClick={()=>deleteBook(book._id)}><FaTrash/></button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}