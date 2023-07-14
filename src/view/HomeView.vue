<template>
   <TaskCreateModal :modalStatus="modalStatus" @closeModal="updateStatus">
      <p>
         <span class="p-float-label">
            <InputText id="task" v-model="value" />
            <label for="task">Task</label>
         </span>
      </p>
      <Button label="Create Task" severity="primary" />
   </TaskCreateModal>
   <BoardContainer @updateModalStatus="updateStatus" :sections="sections" />
</template>
<script setup>
   import { provide, ref, onMounted } from 'vue';
   import BoardContainer from '../components/BoardContainer.vue';
   import TaskCreateModal from '../modals/TaskCreateModal.vue';
   import { useTaskStore } from "../store/TaskStore";

   const modalStatus = ref(false);
   const updateStatus = () => modalStatus.value = !modalStatus.value;

   const taskStore = useTaskStore();

   const { sections } = taskStore;

</script>
