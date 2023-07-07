<template>
   <TaskCreateModal :modalStatus="modalStatus" @closeModal="updateStatus"> 
      <p>
                Ben artık dinamik bir modalım
      </p>
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