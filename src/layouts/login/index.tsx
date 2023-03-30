import React from "react";
import { setUser } from "store";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";

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
    <Box>
      <Button onClick={handleLogin}>Login</Button>
    </Box>
  );
};

export default Login;
