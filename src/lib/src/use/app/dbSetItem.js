export default function dbSetItem(name, props) {
    window.localStorage.setItem(name, JSON.stringify(props));
  }