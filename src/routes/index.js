const requireDir = require('require-dir');

const requireAllRoutes = requireDir("./");

module.exports = requireAllRoutes;