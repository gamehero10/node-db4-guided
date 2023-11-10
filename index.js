const server = require('./api/server.js');

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
