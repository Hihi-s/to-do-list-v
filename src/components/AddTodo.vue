<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onsubmit">
        <input type="text" v-model="title" placeholder="Add Todo..." style="font-family:Comic Sans MS">
        <input type="submit" value="Submit" style="font-family:Comic Sans MS">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddTodo',
  data(){
    return{
      id: '',
      title: '',
      done: false
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onsubmit(e){
      var value = this.title.trim();
      if (!value) {
        alert("Please fill out the form")
      }else{
      this.$store.dispatch('addTodo', this.title);
      }
      e.preventDefault();
      this.title = '';
    }
  }
};
</script>

<style scoped>
form{
  display: flex;
}

input[type="text"]{
  flex: 10;
  padding: 10px;
  border: 1px solid #68c6e3;
  outline: 0;
}

input[type="submit"]{
  flex: 2;
  background: #68c6e3;
  color: black;
  border: 1px solid #68c6e3;
  cursor: pointer;
}

</style>

