import express from 'express'
import Todo from '../controller/todo/todo'

const router = express.Router()

router.get('/', Todo.list)

export default router