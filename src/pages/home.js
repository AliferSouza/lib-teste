import {useNavigate} from "../lib/index.js"

export default async function Home() {
  const state = () => {
    $$({
      "#render": "alifer",
      "#render2": "Souza",
      "#render3": "Oliveira"
    })

    const aa = document.querySelector(".container")
    aa.addEventListener('click', e =>{
      const key = e.target.getAttribute("key")

      useNavigate(key)
    })
  
  };

  return {   
    state,
    html: () => `
        <comp-menu data-id="1"></comp-menu>
      <div class="container">    
        <span id="render" key="/#/teste/">1</span>
        <br>
        <span id="render2">2</span>
        <br>
        <span id="render3">3</span>
        </div>
    `,
   
  };
}
