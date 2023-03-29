import React from "react";
import { setUser } from "store";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(
      setUser({
        name: "John Doe",
        username: "johndoe",
        loggedIn: true,
      })
    );
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
