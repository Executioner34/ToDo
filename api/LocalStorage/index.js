class LocalStorage {
  constructor() {
    this.ls = localStorage;
  }

  getItem(name) {
    const item = JSON.parse(this.ls.getItem(name))
    try {
      return item
    } catch (e) {
      return e
    }
  }

  saveItem(props) {
    const {item , name} = props;
    const items = this.getItem(name)
    try {
      items.push(item)
      return this.ls.setItem(name, JSON.stringify(items))
    } catch (e) {
      return e
    }
  }

  destroy() {
    this.ls.clear()
  }
}

export default new LocalStorage()
