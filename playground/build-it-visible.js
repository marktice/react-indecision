let visible = false;

const toggleVisibility = () => {
  visible = !visible;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visible ? 'Hide Details' : 'Show Details'}
      </button>
      {visible && <p>HELLO! YOU CAN SEE MEE!!! :D</p>}
    </div>
  );

  ReactDOM.render(template, document.querySelector('#app'));
};

render();
