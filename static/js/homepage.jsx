"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <h1>Welcome User</h1>

      <p>
        <a href="/cards">Here are the cards</a>
        <img src="static/img/balloonicorn.jpg"/>
      </p>
      

    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
