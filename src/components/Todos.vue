<template>
  <div class="card">
    <div class="card-body">
      <h3>Todos</h3>
      <div class="container">
        <div
          v-for="todo in allTodos"
          :key="todo.id"
          class="todo"
          :class="todo.completed ? 'marked-done' : ''"
        >
          <!-- mark/unmark done -->
          <input
            type="checkbox"
            class="todo-status"
            id="status"
            :checked="todo.completed"
            @change="updateTodoItem(todo)"
          />
          <!-- print the todo -->
          {{ todo.title }}
          <!-- delete the todo -->
          <b-icon
            class="delete-todo"
            variant="danger"
            icon="trash"
            aria-hidden="true"
            @click="deleteTodo(todo.id)"
          ></b-icon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Todos",
  components: {},
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    updateTodoItem(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      console.log("-- ", updatedTodo);
      this.updateTodo(updatedTodo);
    },
  },
  computed: {
    ...mapGetters(["allTodos"]),
  },

  // lifecycle hooks
  created() {
    this.fetchTodos();
  },
};
</script>
<style scoped>
.todo {
  text-align: center;
  margin: 10px 0;
  padding: 5px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 4px;
  position: relative;
}
.marked-done {
  text-decoration: line-through;
}
.todo-status {
  position: absolute;
  left: 15px;
  top: 10px;
}
.todo-status:hover {
  cursor: pointer;
}
.delete-todo {
  position: absolute;
  right: 5px;
  bottom: 8px;
}
.delete-todo:hover {
  cursor: pointer;
}
</style>