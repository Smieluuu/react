import React from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const loginRef = React.createRef();
  const passwordRef = React.createRef();

  const loginFn = async (e) => {
    e.preventDefault();

    const login = loginRef.current.value;
    const password = passwordRef.current.value;

    const response = await axios.post("/api/login", { login, password });

    if (response.data.success) {
      sessionStorage.setItem("token", response.data.token);
      navigate("/panel");
    }
  };

  return (
    <div className="login-container">
      <form>
        <h2>Backoffice</h2>
        <input ref={loginRef} type="text" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={(e) => loginFn(e)}>Login</button>
      </form>
    </div>
  );
};

export default Login;
