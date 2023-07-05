<script setup>
import TaskSection from './task/Section.vue';

const sections = [
    {
        id:1,
        name: "Backlog",
        tasks:[
                {
                    id:1,
                    title: "Job title"
                },
                {
                    id:2,
                    title: "Job title"
                }
        ]
    },
    {
        id:2,
        name: "Bug",
        tasks:[
                {
                    id:1,
                    title: "Job title"
                },
                {
                    id:2,
                    title: "Job title"
                }
        ]
    },
    {
        id:3,
        name: "In Progress",
        tasks:[
                {
                    id:1,
                    title: "Job title"
                },
                {
                    id:2,
                    title: "Job title"
                }
        ]
    },
    {
        id:4,
        name: "Completed",
        tasks:[
                {
                    id:1,
                    title: "Job title"
                },
                {
                    id:2,
                    title: "Job title"
                }
        ]
    }
];

</script>
<template>
    <div class="container">
        <task-section  v-for="section in sections" :list-data="section" :key="section.id"/> 
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