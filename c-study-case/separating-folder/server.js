const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

// how to know environtment varibale that used by node and express
// console.log(app.get('env'));
// console.log(process.env);

// 4 Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app running on ${port}...`);
});
