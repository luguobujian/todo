import express from "express"
import router from './routes/index'

const app = express()

app.all('*', (req, res, next) => {
    console.log(req.query)
    next()
})

router(app)

app.listen(8082, () => {
    console.log("成功监听端口：8080")
})