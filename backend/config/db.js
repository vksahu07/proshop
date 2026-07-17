import mongoose from 'mongoose'

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    if (!process.env.VERCEL) {
      process.exit(1)
    }
    throw error
  }
}

export default connectDB
