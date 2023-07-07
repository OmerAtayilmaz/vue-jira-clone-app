<template>
    <Teleport to="#modalPosition">
        <Dialog v-model:visible="props.modalStatus" modal  @update:visible="$emit('closeModal')"  :style="{ width: '30vw' }" :breakpoints="{ '960px': '75vw', '641px': '100vw' }">
            <div style="padding:15px 0;">               
                <slot/>
            </div>
    
        </Dialog>
    </Teleport>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps(['modalStatus']);
console.log(props.modalStatus);
</script>