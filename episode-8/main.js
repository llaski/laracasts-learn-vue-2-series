Vue.component('task-list', {

    template: `
        <ul>
            <task v-for="task in tasks">{{ task.task }}</task>
        </ul>
    `,

    data() {
        return {
            tasks: [{
                task: 'Go to store',
                completed: true
            }, {
                task: 'Check email',
                completed: false
            }, {
                task: 'Hit golf balls',
                completed: true
            }, {
                task: 'Workout',
                completed: false
            }]
        }
    }

})

Vue.component('task', {
    template: '<li><slot></slot></li>'
})

new Vue({
    el: '#root',
})