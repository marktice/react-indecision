// import React from 'react';
// import ReactDOM from 'react-dom';

console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
}

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  name: 'Mark',
  age: 29,
  location: 'Melbourne'
};
const templateTwo = (
  <div>
    <h1>{user.name + '!'}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

ReactDOM.render(template, document.querySelector('#app'));
