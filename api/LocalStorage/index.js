/**
 * @module api/LocalStorage/index.js
 * @desc - апи для работы с localStorage.
 * @desc - getItem(key: string) - возвращает данные по ключу из localStorage.
 * @desc - saveItem(props: {key: string, value: Object}) - добавляет в localStorage данные по ключу.
 * Если нет таких данных, то создаёт новый массив и записывает в localStorage
 * @desc - updateItem(props: {key: string, value: Object, id: number}) - обновляет элемент массива в localStorage по id.
 * Возвращает массив
 * @desc - deleteItem(props: {key: string, id: number}) - удаляет элемент массива из localStorage по id.
 * Возвращает новый массив
 * @desc - destroy() - полностью очищает localStorage
 */
export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

export const saveItem = (props) => {
  const { key, value } = props
  const arr = getItem(key)
  if (arr === null) {
    localStorage.setItem(key, JSON.stringify([value]))
  } else {
    arr.push(value)
    localStorage.setItem(key, JSON.stringify(arr))
  }
}

export const updateItem = (props) => {
  const { key, value, id } = props
  const arr = getItem(key)
  const ind = arr.findIndex((item) => item.id === id)
  if (ind !== -1) {
    arr[ind] = value
    localStorage.setItem(key, JSON.stringify(arr))
  }
  return arr
}

export const deleteItem = (props) => {
  const { key, id } = props
  const arr = getItem(key)
  const newArr = arr.filter((item) => item.id !== id)
  localStorage.setItem(key, JSON.stringify(newArr))
  return newArr
}

export const destroy = () => {
  localStorage.clear()
}
