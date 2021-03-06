import React, { useState } from "react";
import LoginManager from "../../modules/LoginManager";

const Login = props => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const handleFieldChange = evt => {
    const stateToChange = { ...userCredentials };
    stateToChange[evt.target.id] = evt.target.value;
    setUserCredentials(stateToChange);
  };

  const handleLogin = e => {
    e.preventDefault();

    LoginManager.getUsers().then(userArray => {
      const user = userArray.find(
        el =>
          el.email === userCredentials.email &&
          el.password === userCredentials.password
      );

      if (user !== undefined) {
        props.setAsUser(user.id);
        props.history.push("/messages");
      } else {
        alert("Invalid information! Try again or register an account");
      }
    });
  };

  const newUserRedirect = () => {
    props.history.push("/newuser");
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <fieldset>
          <h3>Log into Nutshell</h3>
          <div className="formgrid">
            <label htmlFor="inputEmail">Email: </label>
            <input
              onChange={handleFieldChange}
              type="email"
              id="email"
              placeholder="Email address"
              required=""
              autoFocus=""
            />

            <label htmlFor="inputPassword">Password: </label>
            <input
              onChange={handleFieldChange}
              type="password"
              id="password"
              placeholder="Password"
              required=""
            />
          </div>
          <button type="submit">Log in</button>

          <button onClick={newUserRedirect}>Add a new user</button>
        </fieldset>
      </form>
    </>
  );
};

export default Login;
