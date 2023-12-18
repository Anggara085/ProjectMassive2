import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // New state
  const navigate = useNavigate();

  const validateForm = () => {
    setIsButtonDisabled(!(email.trim() !== "" && password.trim() !== ""));
  };

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      // Setelah berhasil mendaftar, navigasi ke halaman login
      navigate("/index2");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section
      className="login-body"
      style={{ backgroundImage: 'url("assets/img/BackgroundLogin.jpg")' }}
    >
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered"></div>
          <div className="column is-4-desktop"></div>
          <form
            onSubmit={Auth}
            className="box"
            style={{
              width: "500px",
              height: "300px",
              margin: "200px",
              marginLeft: "450px",
            }}
          >
            <p className="has-text-centered"> {msg} </p>
            <div className="field mt-5">
              <label className="label">Email or Username</label>
              <div className="controls">
                <input
                  type="text"
                  className="input"
                  placeholder="Username"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateForm();
                  }}
                />
              </div>
            </div>
            <div className="field mt-5">
              <label className="label">Password</label>
              <div className="controls">
                <input
                  type="password"
                  className="input"
                  placeholder="********"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validateForm();
                  }}
                />
              </div>
            </div>
            <div className="field mt-5">
              <button
                className="button is-dark is-fullwidth"
                disabled={isButtonDisabled}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
