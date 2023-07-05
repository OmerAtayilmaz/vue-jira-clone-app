<script setup>

const props = defineProps({
    singleTask:Object
});
</script>
<template>
<Card>
    <template #content>
        <p>
            {{props.singleTask.title}}
        </p>
    </template>
</Card>
</template>
<style scoped>

</style>