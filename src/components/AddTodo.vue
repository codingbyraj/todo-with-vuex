<template>
  <div class="card">
    <div class="card-body">
      <h3>Add Todo</h3>
      <form @submit.prevent="OnSubmit">
        <div class="row">
          <div class="col-md-10">
            <input
              class="form-control"
              type="text"
              v-model="title"
              placeholder="Add Todo..."
            />
          </div>
          <div class="col-md-2">
            <input type="submit" class="form-control btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    OnSubmit() {
      this.addTodo(this.title);
      this.title = '';
    },
  },
};
</script>
<style lang="">
</style>