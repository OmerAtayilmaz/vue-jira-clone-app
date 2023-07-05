<script setup>
import Item from './Item.vue';
import { ref } from "vue";
const props = defineProps([
    "listData"
    ]);

console.log(props);
</script>
<template>
    <div class="col-2 section">
        <h4>{{ listData.name }}</h4>
        <Button label="Add a cart" severity="secondary" text />
        <div class="section--tasks">
            <item v-for="singleTask in listData.tasks" :key="singleTask.id" :single-task="singleTask"/>
        </div>
    </div>
</template>
<style scoped >
.section{
    background-color: #dbdadd;
    height: 80vh;
    padding:25px;
    margin:25px;
    border-radius: 8px;
}
.section h4 {
    color:#010c2b;
}
.p-button{
    font-size:14px;
    font-weight: 200;
}
</style>