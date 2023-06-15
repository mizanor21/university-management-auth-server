import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database connection successfully!')

    app.listen(config.port, () => {
      console.log(`Server app listening on port ${config.port}`)
    })
  } catch {
    console.log('Failed database connection!')
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main()
