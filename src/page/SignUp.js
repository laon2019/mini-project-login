import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { setUserData } from "../redux/reducer/authReducer";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [id, setId] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("비밀번호와 재확인 비밀번호가 틀립니다.");
      return;
    }

    dispatch(setUserData({ username, id, password }));
    navigate('/');
    alert("회원가입 완료");
  };

  const goBack = () => {
    navigate('/');
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

        <Form.Group className="mb-3" controlId="formBasicID">
          <Form.Label style={{ marginBottom: "8px", display: "block", textAlign: "start" }}>
            ID
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
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

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label style={{ marginBottom: "8px", display: "block", textAlign: "start" }}>
            Confirm Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            onClick={handleSignUp}
            style={{
              flex: "1",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "4px",
              marginRight: "5px",
            }}
          >
            회원가입
          </Button>
          <Button
            variant="secondary"
            type="submit"
            onClick={goBack}
            style={{
              flex: "1",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "4px",
              marginLeft: "5px",
            }}
          >
            뒤로가기
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default SignUp;
