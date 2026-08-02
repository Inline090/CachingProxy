const config = require('../config');

async function handlePullRequest(payload) {
  const action = payload.action;
  if (action !== 'opened' && action !== 'synchronize') {
    console.log(`Ignoring PR action: ${action}`);
    return;
  }

  const pr = payload.pull_request;
  const repo = payload.repository.full_name;

  console.log(`PR ${action}: ${pr.html_url}`);
  console.log(`  Title: ${pr.title}`);
  console.log(`  Repo: ${repo}`);
  console.log(`  Diff URL: ${pr.diff_url}`);
}

module.exports = { handlePullRequest };
