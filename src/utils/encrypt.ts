import bcrypt from 'bcrypt'

const SALT_ROUND = 12

export const hashPassword = async (plainPassword: string) => {
    return bcrypt.hash(plainPassword, SALT_ROUND)
}

export const verifyPassword = async (
  plainPassword: string,
  hashedPassword: string
) => {
  return bcrypt.compare(plainPassword, hashedPassword)
}