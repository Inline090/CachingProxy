const { Router } = require('express');
const webhookRouter = require('../webhook/router');

const router = Router();

router.use('/webhook', webhookRouter);

router.get('/status', (_req, res) => {
  res.json({ uptime: process.uptime(), memory: process.memoryUsage() });
});

module.exports = router;
