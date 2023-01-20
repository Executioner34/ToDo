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
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    // Если в локальном хранилище нет задач то ничего не делаем
    if (tasks === null) {
      return;
    }
    const lastIDTask = tasks[tasks.length - 1].id
    commit('SET_COUNTER', lastIDTask + 1)
    commit('SET_TASKS', tasks)
  },
  postTask({commit}, data) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    // Если в локальном хранилище нет задач
    if (tasks === null) {
      // То создаем массив в хранилище
      localStorage.setItem('tasks', JSON.stringify([data]))
    } else {
      // То в хранилище добавляем новую задачу
      tasks.push(data)
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    commit('COUNTER')
    commit('SET_TASK', data)
  },
  pullTask({commit}, data) {
    // Обновляем задачу в localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const taskInd = tasks.findIndex(task => task.id === data.id);
    if (taskInd !== -1) {
      tasks[taskInd] = data;
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }
}
