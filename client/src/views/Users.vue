<template>
    <div class="container mt-5">
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user._id">
                    <th>{{ user._id }}</th>
                    <td>{{ user.email }}</td>
                    <td>{{ user.password }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'users',
    data() {
        return {
            users: ''
        }
    },
    mounted() {
        axios
            .get('http://127.0.0.1:5000/api/users')
            .then(response => (this.users = response.data))
    }
}
</script>