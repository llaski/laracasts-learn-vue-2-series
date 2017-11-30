import Errors from './Errors'

export default class Form {

    constructor(data) {
        this.originalData = data

        for (let field in data) {
            this[field] = data[field]
        }

        this.errors = new Errors
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = ''
        }

        this.errors.clear()
    }

    data() {
        const data = {}

        for (let property in this.originalData) {
            data[property] = this[property]
        }

        return data
    }

    submit(requestType, url) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then((response) => {
                    this.onSuccess(response.data)

                    resolve(response.data)
                })
                .catch((error) => {
                    this.onFail(error.response.data)

                    reject(error.response.data)
                })
        })
    }

    post(url) {
        return this.submit('post', url)
    }

    onSuccess(data) {
        this.reset()
    }

    onFail(data) {
        this.errors.set(data.errors)
    }

}