import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Please, login first</h1>
      <form>
        <input type="text" />
      </form>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#">Register link</a>
    </div>
  );
};

export default Login;
