import 'dotenv/config'

export const env = {
  DATABASE_URL: process.env.DATABASE_URL as string,
  PORT: Number(process.env.PORT || 3000),
}

if (!env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined')
}
