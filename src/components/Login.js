import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Login = () => {
    const navigate = useNavigate();
    const userNameRef = useRef();
    const passwordRef = useRef();

    function handleLogin() {
        const username = userNameRef.current.value;
        const password = passwordRef.current.value;
        if (!username || !password) {
            return;
        }
        if (username !== 'test' || password !== 'test') {
            return;
        }   
        navigate("../home", { replace: true });     
    }

  return (
    <>
      <Container>
        <Box sx={{ my: 2 }} style={{ textAlign: "center", marginTop: 50 }}>
          <Typography variant="h5" component="h5" gutterBottom>
            Login
          </Typography>
        </Box>
        <Box sx={{ my: 2 }} style={{ textAlign: "center", marginTop: 5 }}>
          <form
            name="loginForm"
            novalidate
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: "grow",
            }}
          >
            <div class="form-group" style={{ marginTop: 15 }}>
              <input
                name="username"
                id="username"
                placeholder="User Name"
                required
                type="text"
                ref={userNameRef}
              ></input>
            </div>
            <div class="form-group" style={{ marginTop: 15 }}>
              <input
                name="password"
                id="password"
                placeholder="Password"
                required
                type="password"
                ref={passwordRef}
              ></input>
            </div>
            <div class="form-group" style={{ marginTop: 15 }}>
              <button
                class="btn-primary rounded"
                type="submit"
                onClick={handleLogin}
              >
                Submit
              </button>
            </div>
          </form>
        </Box>
      </Container>
    </>
  );
};
