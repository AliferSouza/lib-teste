export default async function CSVToJSON(url, ct) {
    const response = await fetch(url, {
      headers: {
        ct,
      },
    });
    const data = await response.text();
  
    const lines = data.split("\n");
    const keys = lines[0].split(";");
  
    return lines.slice(1).map((line) => {
      return line.split(";").reduce((acc, cur, i) => {
        const toAdd = {};
        toAdd[keys[i]] = cur;
        return { ...acc, ...toAdd };
      }, {});
    });
  }