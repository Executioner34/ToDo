import { deleteItem, getItem, saveItem, updateItem } from '~/api/LocalStorage'

/**
 * @module store/tasks/index.js
 * @desc - модуль работы с задачами
 * @desc - tasks - массив задач
 * @desc - selectedFilter - выбранный фильтр
 * @desc - nextFreeID - свободное id для таски
 */
export const state = () => ({
  tasks: [],
  selectedFilter: 'all',
  nextFreeID: 0,
})

export const getters = {
  // Фильтруем задачи в зависимости от выбранного фильтра
  filteredTasks: (state) => {
    switch (state.selectedFilter) {
      case 'active':
        return state.tasks.filter((task) => task.checked === false)
      case 'completed':
        return state.tasks.filter((task) => task.checked === true)
      default:
        return state.tasks
    }
  },
  // Возвращает текст задачи по её id
  textTask: (state) => (id) => state.tasks.find((task) => task.id === id).text,
}

export const mutations = {
  // Записываем все задачи
  SET_TASKS(state, payload) {
    state.tasks = payload
  },
  // Добавляем задачу
  ADD_TASK(state, payload) {
    state.tasks.push(payload)
  },
  // Текущий выбранный фильтр для задач
  SET_SELECTED_FILTER(state, payload) {
    state.selectedFilter = payload
  },
  // Записывает новый последний id
  SET_NEW_FREE_ID(state, id) {
    state.nextFreeID = id
  },
}

export const actions = {
  getTasks({ commit }) {
    const tasks = getItem('tasks')
    // Если в локальном хранилище нет задач то ничего не делаем
    if (tasks === null || tasks.length === 0) {
      return
    }
    const lastTaskID = tasks[tasks.length - 1].id
    commit('SET_TASKS', tasks)
    commit('SET_NEW_FREE_ID', lastTaskID + 1)
  },
  postTask({ commit }, data) {
    saveItem({ value: data, key: 'tasks' })
    commit('ADD_TASK', data)
    commit('SET_NEW_FREE_ID', data.id + 1)
  },
  deleteTask({ commit }, id) {
    const newTasks = deleteItem({ key: 'tasks', id })
    // Если еще остались задачи, то
    if (newTasks.length) {
      const lastTaskID = newTasks[newTasks.length - 1].id
      commit('SET_TASKS', newTasks)
      commit('SET_NEW_FREE_ID', lastTaskID + 1)
      return
    }
    // если удалили последнюю задачу, то
    commit('SET_TASKS', [])
    commit('SET_NEW_FREE_ID', 0)
  },
  updateTasks({ commit }, data) {
    // Обновляем задачу в localStorage и коммитим в стор изменный массив
    const newTasks = updateItem({ value: data, id: data.id, key: 'tasks' })
    commit('SET_TASKS', newTasks)
  },
}
