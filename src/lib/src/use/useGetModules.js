export default async function useGetModules(caminho) {
    let result;  
   
    try {
      result = await import(`${caminho}`).then(module => module.default);
  
    } catch (error) {
      // Trate o erro de importação aqui
      console.error("Erro ao importar o arquivo:", error);
      // Defina um valor padrão para result ou faça qualquer outra ação adequada
    }  
    return result;
  }
  