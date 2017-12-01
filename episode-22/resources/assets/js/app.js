import Vue from 'vue'
import axios from 'axios'
import ProjectList from './components/ProjectList.vue'
import Form from './lib/Form'

window.axios = axios
window.Form = Form

new Vue({
    el: '#app',

    components: {
        ProjectList
    },

    data: {
        form: new Form({
            name: '',
            description: '',
        }),
        projects: []
    },

    mounted() {
        this.projects = window.InitialProjects
    },

    methods: {
        onSubmit() {
            const initialData = this.form.data()
            this.form.post('/projects')
                .then(data => {
                    this.projects.push(initialData)
                })
        }
    }

});