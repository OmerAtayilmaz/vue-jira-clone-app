<script setup>
import { ref } from 'vue';
import TaskSection from './task/Section.vue';

const sections =[
    {
        id: 1,
        name: "Backlog",
        tasks: [
            {
                id: 1,
                title: "Fix the navbar bug"
            },
            {
                id: 2,
                title: "Implement user authentication"
            }
        ]
    },
    {
        id: 2,
        name: "Bug",
        tasks: [
            {
                id: 1,
                title: "Resolve database connection issue"
            },
            {
                id: 2,
                title: "Investigate performance bottleneck"
            }
        ]
    },
    {
        id: 3,
        name: "In Progress",
        tasks: [
            {
                id: 1,
                title: "Refactor code for better readability"
            },
            {
                id: 2,
                title: "Add unit tests for API endpoints"
            }
        ]
    },
    {
        id: 4,
        name: "Completed",
        tasks: [
            {
                id: 1,
                title: "Release version 1.0.0"
            },
            {
                id: 2,
                title: "Perform security audit"
            }
        ]
    }
];

</script>
<template>
    <div class="container">
        <task-section  v-for="section in sections" :list-data="section" :key="section.id" @updateModalStatus="$emit('updateModalStatus')"/> 
    </div>
</template>
<style scoped>
.container{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    flex-direction: row;
}
</style>