export const state = () => ({
  tasks: [],
  taskCounter: 0,
})

export const getters = {
}

export const mutations = {
  SET_TASKS: (state, payload) => {
    state.tasks = payload
  },
  SET_TASK: (state, payload) => state.tasks.push(payload),
  SET_COUNTER: (state, payload) => {
    state.taskCounter = payload
  }
}

export const actions = {
  getTasks({commit}) {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    if (tasks === null) {
      return
    }
    const lastIDTask = tasks.sort((a, b) => a.id - b.id)[0].id
    commit('SET_TASKS', tasks)
    commit('SET_COUNTER', lastIDTask)
  },
  postTask({commit}, data) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks === null) {
      localStorage.setItem('tasks', JSON.stringify([data]))
      commit('SET_TASK', data)
      commit('SET_COUNTER', data.id + 1)
      return;
    }
    tasks.push(data)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    commit('SET_TASK', data)
  }
}
