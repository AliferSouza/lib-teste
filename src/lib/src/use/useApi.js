async function Api(url, method) {
    try {
      const res = await fetch(url, method);
      const data = await res.json();
      const valorDta = await data;
      return valorDta;
    } catch {
      return null;
    }
  }

export default Api