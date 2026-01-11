import type { Response } from 'express'

export const sendSuccess = <T>(
  res: Response,
  data: T,
  msg = 'Success',
  statusCode = 200
) => {
  return res.status(statusCode).json({
    data,
    msg,
    statusCode,
    error: null,
  })
}

export const sendError = (
  res: Response,
  msg = 'Internal Server Error',
  statusCode = 500,
  error: any = null
) => {
  return res.status(statusCode).json({
    data: null,
    msg,
    statusCode,
    error: error?.message ?? error,
  })
}
