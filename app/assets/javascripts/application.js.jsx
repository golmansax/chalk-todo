//= require underscore
//= require backbone
//
//= require es5-shim
//= require es5-shim/es5-sham
//= require react
//
//= require moment
//
// Our code
//= require chk
//= require_tree ./components
//= require_tree ./collections

(function () {
  'use strict';

  var container_el = window.document.getElementById('react-container');
  if (container_el) {
    React.render(<Chk.TodoApp />, container_el);
  }
})();
