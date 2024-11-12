import React from "react";
import { Input, Button } from "antd";
import { FacebookOutlined, GoogleOutlined, WhatsAppOutlined } from "@ant-design/icons";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>WELCOME</h1>
      <div className="login-form">
        <Input placeholder="email / username" className="input-field" />
        <Input.Password placeholder="password" className="input-field" />
        <Button type="primary" className="login-button">LOGIN</Button>
        <p className="register-link">
          Don't have an account? <a href="/register">Register</a>
        </p>
        <hr className="divider" />
        <p className="login-with-text">OR LOGIN WITH</p>
        <div className="social-buttons">
          
         
          <Button icon={<FacebookOutlined />} className="social-button facebook">
            Facebook
          </Button>
          <Button icon={<GoogleOutlined />} className="social-button google">
            Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
