export default function addBanco(nome, props) {
    const link = JSON.parse(localStorage.getItem(nome) || "[]");
    link.push(props);
    localStorage.setItem(nome, JSON.stringify(link));
  }