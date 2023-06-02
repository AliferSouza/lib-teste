export default function dbGetItem(props) {
    return JSON.parse(window.localStorage.getItem(props));
  }
  