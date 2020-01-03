import todo from './todo'

export default app => {
    app.use('/todo', todo)
}
