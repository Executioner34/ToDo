import LocalStorage from "~/api/LocalStorage";
export const state = () => ({
  tasks: [],
  currentFilter: '',
  taskCounter: 0,
})

export const getters = {
  filteredTask: (state) => {
    if (state.currentFilter === 'active') {
      return state.tasks.filter(task => task.checked === false)
    }
    if (state.currentFilter === 'completed') {
      return state.tasks.filter(task => task.checked === true)
    }
    return state.tasks
  },
  textIDTask: (state) => (id) => state.tasks.find(task => task.id === id).text
}

export const mutations = {
  SET_TASKS: (state, payload) => {
    state.tasks = payload
  },
  SET_TASK: (state, payload) => state.tasks.push(payload),
  TOGGLE_CHECKED: (state, ind) => {
    state.tasks[ind].checked = !state.tasks[ind].checked
  },
  DELETE_TASK: (state, id) => {
    const ind = state.tasks.findIndex(task => task.id === id)
    if (ind !== -1) {
      state.tasks.splice(ind, 1)
    }
  },
  SET_CURRENT_FILTER: (state, payload) => {
    state.currentFilter = payload
  },
  SET_COUNTER: (state, payload) => {
    state.taskCounter = payload
  },
  COUNTER: (state) => {
    state.taskCounter += 1
  }
}

export const actions = {
  getTasks({commit}) {
    const tasks = LocalStorage.getItem('tasks')
    // Если в локальном хранилище нет задач то ничего не делаем
    if (tasks === null) {
      return
    }
    const lastIDTask = tasks[tasks.length - 1].id
    commit('SET_COUNTER', lastIDTask + 1)
    commit('SET_TASKS', tasks)
  },
  postTask({commit}, data) {
    LocalStorage.saveItem({value: data, key: 'tasks'})
    commit('COUNTER')
    commit('SET_TASK', data)
  },
  deleteTask({commit}, id) {
    LocalStorage.deleteItem({key: 'tasks', id})
    commit('DELETE_TASK', id)
  },
  pullTask({commit}, data) {
    // Обновляем задачу в localStorage
    LocalStorage.updateItem({value: data, id: data.id, key: 'tasks'})
    commit('TOGGLE_CHECKED', data.id)
  }
}
