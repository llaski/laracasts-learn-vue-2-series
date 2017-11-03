Vue.component('message', {
    props: ['title', 'body'],

    data() {
        return {
            visible: true
        }
    },

    template: `
        <article class="message" v-show="visible">
          <div class="message-header">
            <p>{{ title }}</p>
            <button class="delete" aria-label="delete" @click="hideModal"></button>
          </div>
          <div class="message-body">
            {{ body }}
          </div>
        </article>
    `,

    methods: {
        hideModal() {
            this.visible = false
        }
    }

})


new Vue({
    el: '#root',
})