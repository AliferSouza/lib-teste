const ROOT = document.querySelector("#app");
import useGetModules from "./useGetModules.js";


async function customTags(sortedOut, statePage) {
  const components = await useGetModules("../../../components/index.js");

  const divTemporaria = document.createElement("div");
  divTemporaria.insertAdjacentHTML("beforeend", sortedOut);

  const tagElements = [...divTemporaria.getElementsByTagName('*')].filter((element) =>
  element.tagName.toLowerCase().match(/^comp-[a-z]+$/));

  await Promise.all(tagElements.map(async (elem, i) => {
    const newTag = document.createElement(`${elem.tagName.toLowerCase()}-${i}`);
    elem.replaceWith(newTag);
  
    const attributes = { ...elem.dataset };
    Object.entries(attributes).forEach(([key, value]) => {
      newTag.setAttribute(key, value);
    });
  
    const dataApp = {
      referencia: i,
      nameTag: newTag.tagName.toLowerCase(),
      attributes,
      parameter: Object.fromEntries(new URLSearchParams(location.href.split("?")[1]).entries()),
      pagina: location.hash.replace("#", "").match(/^\/(\w+)(\/)?/)
    };
  
    const { html, state } = await components[elem.tagName.toLowerCase()](dataApp);
    newTag.innerHTML = html();
  
    if (typeof state === "function") {
      state();
    }
  }));
  
  ROOT.innerHTML = "";
  ROOT.appendChild(divTemporaria);
  if (typeof  statePage === "function") {
    statePage()
  }

 
}  

async function render(Pages, selectedPage) {
  const { html, state, notTags } = erroPage(Pages) || await Pages[selectedPage]() 
  const renderedHtml = typeof html === "function" ? html() : html;
  const renderedState = typeof state === "function" ? state : undefined;

  if (notTags === undefined) {
    customTags(renderedHtml, renderedState);
  } else {    
    ROOT.innerHTML = renderedHtml;
    renderedState && renderedState();
  }

}

function stateURL(Pages) {
  const dataUrl = location.hash.replace("#", "") || location.pathname;
  let currentPage;

  if (dataUrl === "/#" || dataUrl === "/#/" || dataUrl === "/") {
    currentPage = Object.keys(Pages)[0];
    history.pushState(null, null, `/#/${currentPage}/`);
  } else {
    const match = dataUrl.match(/^\/(\w+)(\/)?/);
    const keyPage = match && match[1];
    currentPage = keyPage && Pages[keyPage] ? keyPage : "erro";   
  }
  return currentPage;
}


function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function erroPage(Pages) {
  ROOT.innerHTML = `
    <div class="erroPages">
      ${Object.keys(Pages).map((page, index) => `<a class="pagina-erro" id="${index}"  data-href="/#/${page}/">${page.toUpperCase()}</a>`).join("")}
    </div>
  `;
}

function Router(Pages) {
  function routerState() {
    const selectedPage = stateURL(Pages);
    if (selectedPage) {
      render(Pages, selectedPage);
    }
  }

  function handleClick(e) {
    if (e.target.matches("[data-href]")) {
      e.preventDefault();
      const href = e.target.dataset.href;
      history.pushState(null, null, href);
      routerState();
    }
  }

  window.addEventListener("popstate", routerState);
  document.body.addEventListener("click", debounce(handleClick, 200));
  routerState();
}

window.$ = (props, valorArederizar) => {
  if(valorArederizar){
  document.querySelector(props).innerHTML = valorArederizar
  }    
  return document.querySelector(props)
}

window.$$ = (options) => {
  const selectors = Object.keys(options);
  const contents = Object.values(options);
  
  const elements = document.querySelectorAll(selectors);
  
  elements.forEach((element, index) => {
    const content = contents[index];
    
    if (content) {
      element.innerHTML = content;
    }
  });
  
  return elements;
};

window.$$$ = (props, valorArederizar) => {
  const elements = document.querySelectorAll(props);

  if (valorArederizar) {
    elements.forEach((element) => {
      console.log(element)
      element.innerHTML += valorArederizar;
    });
  }

  return elements;
};

export default Router


