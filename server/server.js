require('dotenv').config();
const app = require('./index.js');

app.listen(process.env.SERVER_PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log('server listening on port: ', process.env.SERVER_PORT);
});
