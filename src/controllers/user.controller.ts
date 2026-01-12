import { Request, Response } from 'express'
import { sendSuccess, sendError } from '@/utils/apiResponse'
import { createUser } from '@/services/user.service'

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { username, password, role } : {
      username: string,
      password: string,
      role: string,
    } = req.body
    await createUser({ username, password, role })
    sendSuccess(res, null, 'created user was successfully')
  } catch (error) {
    sendError(res, 'Failed to create user', 400)
  }
}