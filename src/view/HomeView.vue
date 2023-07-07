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
   <BoardContainer @updateModalStatus="updateStatus" />
</template>
<script setup>
   import { provide, ref } from 'vue';
   import BoardContainer from '../components/BoardContainer.vue';
   import TaskCreateModal from '../modals/TaskCreateModal.vue';
   
   const modalStatus = ref(false);
   const updateStatus = () => modalStatus.value = !modalStatus.value;
   
   

</script>