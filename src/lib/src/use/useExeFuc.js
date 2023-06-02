export default function storeAndExecuteFunction(func, time) {  
    setTimeout(function() {
      func();
    }, time || 1);
}
  