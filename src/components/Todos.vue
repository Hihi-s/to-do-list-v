<template>
  <div>
    <h2 style="text-align:center">Todo List</h2>
    <div class="legend">
      <span>Double click to mark as complete&nbsp;</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete&nbsp;&nbsp;
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <div class="todos">
      <div @dblclick="onDblclick(todo)" v-for="todo in allTodos" :key="todo.id " 
      class="todo" v-bind:class="{'is-complete':todo.done}">
        {{ todo.title }}
         <i class="fas fa-edit i1"></i>
         <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default{
  name: "Todos",
  methods:{
    ...mapActions(['deleteTodo','updateTodo']),
    onDblclick(todo){
        const updTodo = {
          id: todo.id,
          title: todo.title,
          done: !todo.done
        }
        this.updateTodo(updTodo);
      },
      editTodo(item) {
        this.cacheTodo = item
        this.cacheTitle = item.title
    }
  },
  
  computed: mapGetters(['allTodos'])
};
</script>

<style>
.todos{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .todo{
    border: 1px solid #ccc;
    background: #68c6e3;
    padding: 3rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  .legend{
    display: inline-block;
    justify-content: space-around;
    margin-bottom: 1rem;
    font-family:"Comic Sans MS";
  }
  i{
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }
  .i1{
    position: absolute;
    bottom: 10px;
    right: 35px;
    color: #fff;
    cursor: pointer;
  }
  .complete-box{
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #CCEEFF;
    border: groove;
  }
  .incomplete-box{
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #68c6e3;
    border: groove;
  }
  .is-complete{
    background: #354a51;
    background: #CCEEFF;
  }
</style>

