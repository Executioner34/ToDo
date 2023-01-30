/**
 * @module middleware/todoPage.js
 * @desc - Защищает маршрут /todo/:id от отсутсвия задач в сторе
 */
export default function ({ store, redirect }) {
  if (!store.state.tasks.tasks.length) {
    return redirect('/')
  }
}
