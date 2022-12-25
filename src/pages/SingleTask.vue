<script>
export default {
  data() {
    return {
      task: {},
    };
  },
  created() {
    // Get task from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskId = this.$route.params.id;
    console.log(taskId);
    this.task = tasks.find((task) => task.id == taskId);
    console.log(this.task);
  },
  methods: {
    updateTask() {
      // Update task in local storage
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const taskIndex = tasks.findIndex((task) => task.id === this.task.id);
      tasks[taskIndex] = this.task;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    markAsDone() {
      // Mark task as done in local storage
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const taskIndex = tasks.findIndex((task) => task.id === this.task.id);
      tasks[taskIndex].status = "Done";
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
  },
};
</script>

<template>
  <div class="page-container">
    <h1>{{ task.name }}</h1>
    <div>
      <h4>Tag:</h4>
      <p>{{ task.tag }}</p>
    </div>
    <div>
      <h4>Description:</h4>
      <p>{{ task.description }}</p>
    </div>
    <div>
      <h4>Deadline:</h4>
      <p>{{ task.deadline }}</p>
    </div>
    <div>
      <h4>Status:</h4>
      <p>{{ task.status }}</p>
    </div>
    <form>
      <label for="deadline">Change Deadline</label>
      <span>
        <input v-model="task.deadline" type="date" id="deadline" />
        <button @click.prevent="updateTask">Update</button>
      </span>
    </form>
    <button @click.prevent="markAsDone">Mark as Done</button>
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 1.5rem;
}
p {
  margin-top: 0;
  margin-bottom: 0.2rem;
}
h4 {
  margin-top: 0;
  margin-bottom: 0;
}

form {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

button {
  background-color: #0f1620;
  border-radius: 5px;
  min-height: 2rem;
  margin-left: 1rem;
}

button:hover {
  background-color: #ccfc4c;
  color: #0f1620;
  border-radius: 5px;
  min-height: 2rem;
}
</style>
