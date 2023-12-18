import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const id = useSelector((state) => state.auth.id);
  const pw = useSelector((state) => state.auth.password);

  useEffect(() => {
    console.log("Updated ID:", id);
    console.log("Updated Password:", pw);
  }, [id, pw]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === id && password === pw) {
      navigate("/profile");
    } else {
      console.log("Incorrect username or password");
    }
  };

  const goToSignUp = () => {
    navigate("/signUp");
  };

  return (
    <Container>
      <Form
        style={{
          maxWidth: "300px",
          margin: "auto",
          marginTop: "50px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label style={{ marginBottom: "8px", display: "block", textAlign: "start" }}>
            Username
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ marginBottom: "8px", display: "block", textAlign: "start" }}>
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          />
        </Form.Group>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="primary"
            type="submit"
            onClick={handleLogin}
            style={{
              flex: "1",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "4px",
              marginRight: "5px",
            }}
          >
            Login
          </Button>
          <Button
            variant="secondary"
            type="submit"
            onClick={goToSignUp}
            style={{
              flex: "1",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "4px",
              marginLeft: "5px",
            }}
          >
            SignUp
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Home;
