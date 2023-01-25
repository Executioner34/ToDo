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
  selectedFilter: '',
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
    state.nextFreeID = state.tasks[state.tasks.length - 1].id + 1
  },
  // Добавляем задачу
  ADD_TASK(state, payload) {
    state.tasks.push(payload)
    state.nextFreeID += 1
  },
  // Удаляем задачу
  DELETE_TASK(state, id) {
    const ind = state.tasks.findIndex((task) => task.id === id)
    if (ind !== -1) {
      state.tasks.splice(ind, 1)
      state.nextFreeID -= 1
    }
  },
  // Меняем у задачи статус отметки по её id
  TOGGLE_CHECKED(state, ind) {
    state.tasks[ind].checked = !state.tasks[ind].checked
  },
  // Текущий выбранный фильтр для задач
  SET_SELECTED_FILTER(state, payload) {
    state.selectedFilter = payload
  },
}

export const actions = {
  getTasks({ commit }) {
    const tasks = getItem('tasks')
    // Если в локальном хранилище нет задач то ничего не делаем
    if (tasks === null || tasks.length === 0) {
      return
    }
    commit('SET_TASKS', tasks)
  },
  postTask({ commit }, data) {
    saveItem({ value: data, key: 'tasks' })
    commit('ADD_TASK', data)
  },
  deleteTask({ commit }, id) {
    deleteItem({ key: 'tasks', id })
    commit('DELETE_TASK', id)
  },
  pullTask({ commit }, data) {
    // Обновляем задачу в localStorage
    updateItem({ value: data, id: data.id, key: 'tasks' })
    commit('TOGGLE_CHECKED', data.id)
  },
}
