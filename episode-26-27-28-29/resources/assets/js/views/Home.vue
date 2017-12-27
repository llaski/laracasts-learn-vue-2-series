<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>
                            {{ status.user.name }} said...
                        </p>
                        <p>
                            {{ status.created_at.date | ago }}
                        </p>
                    </div>

                    <div class="message-body" v-text="status.body"></div>
                </div>

                <add-to-stream @completed="addStatus"></add-to-stream>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import Status from '../models/Status'
import AddToStream from '../components/AddToStream'

  export default {
    components: {
        AddToStream
    },

    data() {
        return {
            statuses: []
        }
    },

    filters: {
        ago(value) {
            return moment(value).fromNow()
        }
    },

    created() {
        Status.all(statuses => this.statuses = statuses)
    },

    methods: {
        addStatus(status) {
            this.statuses.unshift(status)

            window.scrollTo(0, 0)
        }
    }

  }
</script>