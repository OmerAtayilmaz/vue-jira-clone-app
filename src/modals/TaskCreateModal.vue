<template>
    <Teleport to="#modalPosition">
        <Dialog v-model:visible="props.modalStatus" modal  @update:visible="$emit('closeModal')"  :style="{ width: '50vw' }" :breakpoints="{ '960px': '75vw', '641px': '100vw' }">
    
           <slot/>
        </Dialog>
    </Teleport>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps(['modalStatus']);
console.log(props.modalStatus);
</script>