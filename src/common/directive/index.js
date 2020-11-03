import directives from "./directives";

const GlobalDirective = Vue => {
  Vue.directive("update", directives.update);
};
export default GlobalDirective;
