const config = {
  port: parseInt(process.env.PORT, 10) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',

  github: {
    webhookSecret: process.env.GITHUB_WEBHOOK_SECRET || '',
    token: process.env.GITHUB_TOKEN || '',
  },

  ollama: {
    baseUrl: process.env.OLLAMA_BASE_URL || 'http://localhost:11434',
    model: process.env.OLLAMA_MODEL || 'codellama',
  },

  chroma: {
    url: process.env.CHROMA_URL || 'http://localhost:8000',
    collectionName: 'code_reviews',
  },

  wsPort: parseInt(process.env.WS_PORT, 10) || 3001,
};

if (!config.github.webhookSecret && config.nodeEnv === 'production') {
  throw new Error('GITHUB_WEBHOOK_SECRET is required in production');
}

module.exports = config;
