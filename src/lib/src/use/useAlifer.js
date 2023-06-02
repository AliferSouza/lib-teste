export default window.useAlifer =  (value) => {
  let count = value

  window.setCount = async (newState, tag) => {    
    count = newState     
    get(); 
    document.querySelector(`[${tag}]`).textContent = count
  };

  window.get = ()=> {   
    return count
  }

  return [get, setCount];
};
