
const state = { 
  todos: [
  {
    id: 1,
    title: '編輯action',
    done: false
  },
  {
    id: 2,
    title: '資料庫連不上',
    done: true
  }
  ]
};

const getters = {
allTodos: state => state.todos,
activeTodosLength: state => state.todos.filter((todos) => !todos.done).length,
todosLength: state => state.todos.filter((todos) => !todos.done),
completed: state => state.done,
uncompleted: state => !state.done,

  

};

const actions = {
addTodo({ commit } ,title){
commit("newTodo",title)
},
deleteTodo({ commit } ,id){
commit("removeTodo",id)
},
updateTodo({ commit }, id){
commit('updateTodo' , id);
},
changeCompleted({ commit }) {
commit("change_complete");
},
changeunCompleted({ commit }) {
commit("change_uncomplete");
},


};

const mutations = {
change_complete(state) {
state.done = state.done == true ? false : true;
state.todos = state.todos.filter(todo => todo.done == true);
},
change_uncomplete(state) {
state.done = state.done == true ? false : true;
state.todos = state.todos.filter(todo => todo.done == false);
},

newTodo(state, todo) {
  state.todos.push({
  id: state.todos.length+1,
  title: todo,
  done: false 
})
},

removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),

updateTodo: (state, done) => {
const index =state.todos.findIndex(todo => todo.id === done.id);
if(index !== -1){
  state.todos.splice(index, 1, done);
}},
};

export default{
state,
getters,
actions,
mutations
};
