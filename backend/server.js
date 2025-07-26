// server.js
const app = require('./app'); // import app.js

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});
