import axios from 'axios';
import URLS from '../../utils/util.js';
const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }) {
        try {
            const res = await axios.get(URLS.todo);
            commit('setTodos', res.data); // first argument is the name of mutation and second is data
        } catch (e) {
            console.log('error',e);
        }
    },
    async addTodo({ commit }, title) {
        try {
            const res = await axios.post(URLS.todo, { title, completed: false });
            // console.log(res);
            commit('newTodo', res.data);
        } catch (e) {
            console.log('error',e);
        }
    },
    async updateTodo({ commit }, updatedTodo) {
        try {            
            const res = await axios.put(`${URLS.todo}/${updatedTodo.id}`, updatedTodo);
            commit('updateTodo', res.data);
        } catch (e) {
            console.log('error',e);
        }
    },
    async deleteTodo({ commit }, id) {
        try {
            await axios.delete(`${URLS.todo}/${id}`);
            commit('removeTodo', id);
        } catch (e) {
            console.log('error',e);
        }
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => {
        state.todos = state.todos.filter(todo => todo.id !== id);
    },
    updateTodo: (state, updatedTodo) => {
        let index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
        state.todos.splice(index, 1, updatedTodo);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};