var React = require('react');
var ReactDOM =require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')

//app css
require('style!css!sass!applicationStyles')
$(document).foundation();
  ReactDOM.render(
  <p>Boilerplate 3</p>,
    document.getElementById('app')
  );
