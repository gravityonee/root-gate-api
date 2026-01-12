import { Router } from 'express'
import { login } from '@/controllers/auth.controller'
import { createUserController } from '@/controllers/user.controller'

const router = Router()

router.get('/auth/login', login)
router.post('/user/create', createUserController)

export default router
