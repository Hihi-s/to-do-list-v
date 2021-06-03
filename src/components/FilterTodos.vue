<template>
  <div>
    <h4 style="font-family:Comic Sans MS">Filter Todos:</h4>
    <div style="font-family:Comic Sans MS">
    Still have {{activeTodosLength}} missions to do
   </div>
    <div>
    <table style="border-spacing:10px 10px;">
      <tr>
        <td>
        <button @click="changeTab" :class="{active:completed}" style="font-family:Comic Sans MS">Complete</button>
        </td>
        <td>
        <button @click="changeTab1" :class="{active:uncompleted}" style="font-family:Comic Sans MS">InComplete</button>
        </td>
      </tr>
    </table>
  </div>
  </div>
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["completed","uncompleted","activeTodosLength"])
  },
  methods: {
    ...mapActions(["changeCompleted","changeunCompleted"]),
    changeTab() {
      this.changeCompleted();
      console.log("c")
    },
    changeTab1() {
      this.changeunCompleted();
      console.log("d")
    },
  }
};
</script>

<style>

ul {
  list-style-type: none;
  display: flex;
}
button {
  outline: double;
  border: none;
  padding: 15px 40px;
  color: black;
  background-color: #CCEEFF;
  font-weight: bold;
}
button:hover {
  outline: double;
  padding: 15px 40px;
  background-color: white;
}
.active {
    outline: double;
    color: black;
    padding: 15px 40px;
    background-color: #68c6e3;
}
.active:hover {
  outline: double;
  border: none;
  padding: 15px 40px;
  color: black;
  background-color: white;
}
</style>

