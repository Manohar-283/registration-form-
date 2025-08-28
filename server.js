const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Setup multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Handle form submission
app.post('/submit', upload.single('photo'), (req, res) => {
  // Normalize course selection
  let selectedCourses = req.body.courses;
  if (!Array.isArray(selectedCourses)) {
    selectedCourses = selectedCourses ? [selectedCourses] : [];
  }

  // Log submitted data
  console.log('📥 Registration Received:');
  console.log({
    name: req.body.name,
    email: req.body.email,
    dob: req.body.dob,
    gender: req.body.gender,
    phone: req.body.phone,
    courses: selectedCourses,
    bio: req.body.bio,
    termsAccepted: req.body.terms === 'on',
    photo: req.file ? req.file.originalname : 'No file uploaded'
  });

  res.send('✅ Registration successful! Check server console for submitted data.');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});