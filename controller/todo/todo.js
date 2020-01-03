

class Todo {
    constructor() {
        // super()
    }

    async list(req, res) {
        console.log(req.query + '---')
    }

    async add(req, res) {

    }

    async update(req, res) {

    }

    async delete(req, res) {

    }
}

export default new Todo()