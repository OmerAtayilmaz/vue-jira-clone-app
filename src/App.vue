<template>
  <Menubar :model="items">
    <template #start>
      <img alt="logo" src="./assets/logo.png" height="40" class="mr-2" />
    </template>
    <template #end>
      <InputText placeholder="Search" type="text" />
    </template>
  </Menubar>
  <SidebarComponent></SidebarComponent>
  <HomeView/>
</template>

<script setup>
import { ref } from "vue";
import SidebarComponent from "./components/SidebarComponent.vue";
import HomeView from "./view/HomeView.vue";

const items = ref([
  {
    label: 'Workspaces',
    icon: 'pi pi-fw  pi-spin pi-box',
    items: [
      {
        label: 'Project 1',
        icon: 'pi pi-fw pi-angle-double-right'
      },
      {
        label: 'Project 2',
        icon: 'pi pi-fw pi-angle-double-right'
      }
    ]
  },
  {
    label: 'Create',
    icon: 'pi pi-fw pi-plus'
  }
]);
</script>
