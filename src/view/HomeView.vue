<template>
   <TaskCreateModal :modalStatus="modalStatus" @closeModal="updateStatus">
      <p>
         <span class="p-float-label">
            <InputText id="task" v-model="newTask" />
            <label for="task">Task</label>
         </span>
      </p>
      <Button label="Create Task" severity="primary" @click="createTask()" />
   </TaskCreateModal>
   <BoardContainer @updateModalStatus="updateStatus()" :sections="sections" />
</template>
<script setup>
import {provide, ref} from 'vue';
   import BoardContainer from '../components/BoardContainer.vue';
   import TaskCreateModal from '../modals/TaskCreateModal.vue';
   import { useTaskStore } from "../store/TaskStore";

   const modalStatus = ref(false);
   const updateStatus = () => modalStatus.value = !modalStatus.value;
console.log(modalStatus.value);
   const taskStore = useTaskStore();

   const { sections } = taskStore;

   const newTask = ref('');

   const newTaskType = ref('BACKLOG');
   provide("newTaskType",newTaskType);

   function createTask(){
     console.log(newTaskType);
     taskStore.addTask({
       task: newTask.value,
       type: newTaskType
     })
   }
</script>
