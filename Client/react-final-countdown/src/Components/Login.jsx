import React, { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const userDetails = {
      username,
      password,
    };
    console.log("userDetails:", userDetails);
  };

  return (
    <div>
      <h3>Enter Your Username and Password</h3>

      <h4>Enter Username</h4>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <br />
      <h4>Enter Password</h4>
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
