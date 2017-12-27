export default {

    all(then) {
        return axios.get('/statuses')
            .then(({ data }) => {
                then(data)
            })
    }

}