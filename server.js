const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { secretCode } = require('./config/config');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use(cookieParser());

// Setup session middleware
app.use(session({
  secret: secretCode,  
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // In production, set this to 'true' and use HTTPS
}));

// Use the authentication routes
app.use('/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
