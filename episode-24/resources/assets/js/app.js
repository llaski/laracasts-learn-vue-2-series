import Vue from 'vue'

let store = {
        user: {
            name: "Larry"
        }
    }

new Vue({
    el: '#one',

    data: {
        shared: store,
        food: 'apple'
    }

});

new Vue({
    el: '#two',

    data: {
        shared: store,
        food: 'banana'
    }

});