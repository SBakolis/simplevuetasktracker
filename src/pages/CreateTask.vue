<script>
export default {
  data() {
    return {
      taskName: "",
      taskTag: "",
      taskDescription: "",
      deadline: "",
    };
  },
  methods: {
    saveTask() {
      // Validate form
      if (
        !this.taskName ||
        !this.taskTag ||
        !this.taskDescription ||
        !this.deadline
      ) {
        return;
      }

      // Save task to local storage
      const task = {
        name: this.taskName,
        tag: this.taskTag,
        description: this.taskDescription,
        deadline: this.deadline,
        status: "In Progress",
        id: JSON.parse(localStorage.getItem("tasks"))
          ? JSON.parse(localStorage.getItem("tasks")).length
          : 0,
      };
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));

      // Clear form
      this.taskName = "";
      this.taskTag = "";
      this.taskDescription = "";
      this.deadline = "";

      // Redirect to task list page
      this.$router.push("/tasks");
    },
  },
};
</script>

<template>
  <div class="page-container">
    <h3>Create Task:</h3>
    <form>
      <label for="taskName">Name</label>
      <input
        v-model="taskName"
        type="text"
        id="taskName"
        maxlength="2048"
        required
      />
      <label for="taskTag">Tag</label>
      <input
        v-model="taskTag"
        type="text"
        id="taskTag"
        maxlength="2048"
        required
      />
      <label for="taskDescription">Description</label>
      <textarea
        v-model="taskDescription"
        id="taskDescription"
        maxlength="2048"
        required
      ></textarea>
      <label for="deadline">Deadline</label>
      <input v-model="deadline" type="date" id="deadline" required />
      <button @click.prevent="saveTask">Save</button>
    </form>
  </div>
</template>

<style scoped>
.page-container form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
}

form button {
  margin-top: 2rem;
}

form input {
  background-color: #0f1620;
  border-radius: 5px;
}

form textarea {
  background-color: #0f1620;
  border-radius: 5px;
  min-height: 5rem;
}

form button {
  background-color: #0f1620;
  border-radius: 5px;
  min-height: 2rem;
}

form button:hover {
  background-color: #ccfc4c;
  color: #0f1620;
  border-radius: 5px;
  min-height: 2rem;
}
</style>
