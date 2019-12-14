import { Router } from 'express'

import admin from './Admin'
import supervisor from'./Supervisor'
const router = new Router()

router.use('/admin', admin)
router.use('/supervisor',supervisor)

export default router