import React, {useState} from "react";
import { setUser } from "store";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"; 
import { Box, Button, Grid, Typography } from "@mui/material";
import Input from "components/Input";

import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";


const authUsers = [
  {
      id: 1,
      username: "canokulmus",
      name: "Can Okulmuş",
      password: "123456",
  }
]

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const [error, setError] = useState({
    username: false,
    password: false,
  });

  const handleLogin = () => {

    // Validate username
    if (username === "" || password === "") {
      setError({
        username: username === "",
        password: password === "",
      });

      return
    }

    // Validate  username & password
    const user = authUsers.find((user) => user.username === username && user.password === password);

    // If no errors, login
    if (user) {
      dispatch(setUser({
        name: user.name,
        username: user.username,
        loggedIn: true,
      }));

      history.push("/dashboard");
    }
  };


  return (
    <Box 
      sx={{ 
        flexGrow: 1,
      }}
    >
      <Grid 
        container
        sx = {{ overflow: 'hidden' }}
      >
        <Grid 
          item 
          xs={12} 
          lg ={6}
          sx={{
            height: "100vh",
            backgroundColor: "#f5f5f5",
          }}
         >
          <img 
            src="images/login2.png"
            style = {{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',

            }}
          />
        </Grid>

        <Grid item xs={12} lg ={6} 
          display = "flex"
          alignItems = "center"
          justifyContent = "center"
          flexDirection={"column"}
          height={"100vh"}
          width={"100%"}
        >
            <Box
              maxWidth={300}
              display={"flex"}
              justifyContent={"center"}
              my = {4}
            >
              <img src="images/logo2.svg" alt="co-motors logo" width={"75%"} />
            </Box>

            <Input 
              label="Username"
              placeholder="Enter username..."
              value= {username}
              onChange= { (e) => setUsername(e.target.value)}
              error={error.username}
              type="text"
            />

            <Input 
              label="Password"
              placeholder="Enter password..."
              value={password}
              onChange= { (e) => setPassword(e.target.value)}
              error={error.password}
              type="password"
            />

          <Button
            variant="contained"
            sx={{
              color: colors.text.primary,
              backgroundColor: colors.primary.main,
              width: '200px',
              padding: '15px 0 15px 0 !important', 
              borderRadius: borders.borderRadius.lg,
              marginTop: '20px',
              '&:hover': {
                backgroundColor: colors.text.primary,
                color: colors.primary.main,
              }
            }}
            onClick={handleLogin}
          >
            Sign In
          </Button>

          <Typography
            variant="body2"
            my={4}
          >
            Created by Can Okulmuş &nbsp;| &nbsp;Copyright © 2023 
          </Typography>
        </Grid>
      </Grid>
  </Box>
  );
};

export default Login;
