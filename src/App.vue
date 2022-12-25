<script setup>
import ButtonBean from "./components/ButtonBean.vue";
</script>

<template>
  <div id="app">
    <h1>Task Planner App</h1>
    <div class="btn-container-app">
      <ButtonBean url="/" text="Create" />
      <ButtonBean url="/tasks" text="Tasks" />
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
.btn-container-app {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
}

.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  border: 0.2rem solid black;
  border-radius: 5px;
  margin: 1rem;
  padding: 1rem;
}
</style>
