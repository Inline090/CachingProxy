const { Router } = require('express');
const { handlePullRequest } = require('./index');

const router = Router();

router.post('/github', (req, res) => {
  const event = req.headers['x-github-event'];
  if (!event) {
    return res.status(400).json({ error: 'Missing X-GitHub-Event header' });
  }
  if (event === 'pull_request') {
    handlePullRequest(req.body);
  }
  res.status(200).json({ received: true });
});

module.exports = router;
