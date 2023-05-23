const app = require('./server')
const Config = require('./config/config')
const connectDB = require('./db/connect')

connectDB().then(async function onServerInit() {
  console.log('Database connected')

  app.listen(Config.app.PORT, () => {
    console.log('Running on port ' + Config.app.PORT);
  });
})
