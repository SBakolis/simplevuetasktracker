<script>
import ButtonBean from "../components/ButtonBean.vue";

export default {
  data() {
    return {
      statusFilter: "",
      overdueFilter: false,
    };
  },
  computed: {
    tasks() {
      return JSON.parse(localStorage.getItem("tasks")) || [];
    },
    filteredTasks() {
      let tasks = this.tasks;
      if (this.statusFilter) {
        tasks = tasks.filter((task) => task.status === this.statusFilter);
      }
      if (this.overdueFilter) {
        const today = new Date();
        tasks = tasks.filter(
          (task) => new Date(task.deadline) < today && task.status != "Done"
        );
      }
      return tasks;
    },
  },
  components: { ButtonBean },
};
</script>

<template>
  <div class="page-container">
    <form class="filter-container">
      <div>
        <label for="statusFilter">Status: </label>
        <select v-model="statusFilter" id="statusFilter">
          <option value="">All</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <div>
        <label for="overdueFilter">Overdue</label>
        <input v-model="overdueFilter" type="checkbox" id="overdueFilter" />
      </div>
    </form>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Tag</th>
          <th>Description</th>
          <th>Deadline</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in filteredTasks">
          <td>{{ task.name }}</td>
          <td>{{ task.tag }}</td>
          <td>
            <p class="limited-char-100">{{ task.description }}</p>
          </td>
          <td>{{ task.deadline }}</td>
          <td>
            <div class="status-container">
              <p>{{ task.status }}</p>
            </div>
          </td>
          <td>
            <ButtonBean :url="'/task/' + task.id" text="View" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.filter-container {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
}

.limited-char-100 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
}

td {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
