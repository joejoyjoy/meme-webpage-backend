import { listen } from './server'
import { app as _app } from './config/config'
import connectDB from './db/connect'

connectDB().then(async function onServerInit() {
  console.log('Database connected')

  listen(_app.PORT, () => {
    console.log('Running on port ' + _app.PORT);
  });
})
