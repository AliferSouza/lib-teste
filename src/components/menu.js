
export default async function Menu(props) {
  const state = async () =>{


   }
  
  const html = () => `   
    <nav>  
      <a class="active" href="/#/home/">Início</a> 
      <a class="active" href="/#/teste/">pagina</a>  
      <a class="active" href="/#/admin/">admin</a>  
  </nav>
  `


  return {
    html,
    state
  }
}
