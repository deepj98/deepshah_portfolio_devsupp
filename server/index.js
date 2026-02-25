const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const distPath = path.join(__dirname, '../client/dist');
// Serve built React app in production (when dist exists)
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Optional: contact form endpoint (no mailer by default, just logs)
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  console.log('Contact submission:', { name, email, message });
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
