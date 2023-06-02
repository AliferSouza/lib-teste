export default function generateId() {
    const id = Math.random().toString(32).substr(2, 9);
    return id;
}
  