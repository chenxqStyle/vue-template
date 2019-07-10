import directives from "./directives";

const GlobalDirective = Vue => {
  Vue.directive("update", directives.update);
  
  // Vue.prototype.test = callback => {
  // };
};
export default GlobalDirective;
