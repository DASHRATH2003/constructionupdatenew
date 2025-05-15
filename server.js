import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

// Get directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express app
const app = express();
const PORT = process.env.PORT || 9002; // Try a different port

// Add middleware to disable authentication prompts and set CORS headers
app.use((req, res, next) => {
  // Remove any authentication headers
  res.setHeader('WWW-Authenticate', '');

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

// Basic route for testing
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Define routes for SPA
const routes = ['/', '/about', '/services', '/projects', '/testimonials', '/contact'];

// Handle all SPA routes
routes.forEach(route => {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
});

// Fallback for any other routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
console.log('Starting server...');
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});

