const Events = new class {
    constructor() {
        this.vue = new Vue()
    }

    fire(event, data = null) {
        this.vue.$emit(event, data)
    }

    listen(event, callback) {
        this.vue.$on(event, callback)
    }
}

Vue.component('coupon', {
    props: ['selected'],

    template: `
        <input placeholder="Enter coupon code" @blur="onCouponApplied">
    `,

    methods: {

        onCouponApplied() {
            Events.fire('applied')
        }
    }
})

new Vue({
    el: '#root',

    created() {
        Events.listen('applied', () => {
            console.log('handling applied')
        })
    }
})