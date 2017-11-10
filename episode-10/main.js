Vue.component('modal', {
    props: ['show'],

    template: `
        <div class="modal" :class="{ 'is-active': this.show }">
          <div class="modal-background"></div>
          <div class="modal-content">
            <div class="box">
                <slot></slot>
            </div>
          </div>
          <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
        </div>
    `
})


new Vue({
    el: '#root',

    data: {
        showModal: false
    }
})