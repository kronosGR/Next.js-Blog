const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'nextblog',
        mongodb_password: '4wYIY79oBgEEC6Up',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'blog',
      },
    };
  }
  
  // for production
  return {
    env: {
      mongodb_username: 'nextblog',
      mongodb_password: '4wYIY79oBgEEC6Up',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'blog',
    },
  };
};
