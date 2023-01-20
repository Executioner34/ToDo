export default function ({store, redirect}) {
  if (!store.state.tasks.tasks.length) {
    return redirect('/')
  }
}
