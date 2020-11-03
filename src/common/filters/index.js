import Vue from "vue";

Vue.filter("formatTimeToDate", val => {
  return (val || "").split(" ")[0];
});
