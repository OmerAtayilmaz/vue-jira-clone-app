<script setup>
import { ref } from 'vue';
import TaskSection from './task/Section.vue';

const props = defineProps([ "sections" ]);
</script>
<template>
    <div class="container">
        <task-section  v-for="section in props.sections" :list-data="section.tasks" :title="section.name" :key="section.id" @updateModalStatus="$emit('updateModalStatus')"/>
    </div>
</template>
<style scoped>
.container{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 70vh;
    flex-direction: row;
}
</style>
