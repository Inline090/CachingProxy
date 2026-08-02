require('dotenv').config();

const express = require('express');
const cors = require('cors');
const config = require('./config');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(config.port, () => {
  console.log(`CodeReviewBot running on port ${config.port}`);
  console.log(`Health check: http://localhost:${config.port}/health`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down...');
  process.exit(0);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1);
});

module.exports = app;
