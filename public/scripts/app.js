'use strict';

// import React from 'react';
// import ReactDOM from 'react-dom';

console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'Mark',
  age: 29,
  location: 'Melbourne'
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name + '!'
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

ReactDOM.render(template, document.querySelector('#app'));
