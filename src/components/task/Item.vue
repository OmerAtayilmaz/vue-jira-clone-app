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
    <template #footer>
        <Button icon="pi pi-file-edit" severity="warning" aria-label="Edit" />
        <Button icon="pi pi-trash" severity="danger" aria-label="Delete" @click="props.singleTask.status='DELETED'" />
    </template>
</Card>
</template>
<style scoped>
.p-card{
    margin:15px 0;
}
.p-button{
    margin:0 2px;
}
</style>
