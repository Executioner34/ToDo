class LocalStorage {
  getItem(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  saveItem(props) {
    const {key , value} = props;
    const arr = this.getItem(key)
    if (arr === null) {
      localStorage.setItem(key, JSON.stringify([value]))
    } else {
      arr.push(value)
      localStorage.setItem(key, JSON.stringify(arr))
    }
  }

  updateItem(props) {
    const {key, value, id} = props;
    const arr = this.getItem(key);
    const ind = arr.findIndex(item => item.id === id);
    if (ind !== -1) {
      arr[ind] = value;
      localStorage.setItem(key, JSON.stringify(arr))
    }
  }

<<<<<<< HEAD
  deleteItem(props) {
    const {key, id} = props;
    const arr = this.getItem(key);
    const newArr = arr.filter(item => item.id !== id);
    localStorage.setItem(key, JSON.stringify(newArr))
  }

=======
>>>>>>> 3f026ebc5f2f73e79615c03d8c6900a8bc393aea
  destroy() {
    localStorage.clear()
  }
}

export default new LocalStorage
