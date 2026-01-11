import { Request, Response } from 'express'
import { addSession } from '@/services/auth.service'
import { sendSuccess, sendError } from '@/utils/apiResponse'

export const login = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await addSession()
    return sendSuccess(res, users, 'Users fetched successfully')
  } catch (error) {
    sendError(res)
  }
}