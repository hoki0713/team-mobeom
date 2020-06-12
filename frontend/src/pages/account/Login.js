import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Image } from "react-bootstrap";
import { MainLogo } from "../splash-page";

const Login = () => (
  <Container className="mt-5">
    <MainLogo />
    <Form className="w-25 mx-auto">
      <Form.Group>
        <Form.Control type="text" placeholder="아이디" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="비밀번호" />
      </Form.Group>
    </Form>
    <Form inline className="w-25 mx-auto">
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="자동로그인" />
        <Link to="/" className="ml-4">
          아이디/비밀번호 찾기
        </Link>
      </Form.Group>
    </Form>
    <Form className="mt-2 w-25 mx-auto">
      <Button className="w-100 mb-3" variant="primary" type="submit">
        로그인
      </Button>

      <h4>아직 회원이 아니신가요?</h4>
      <Image
        className="w-100 mb-3"
        src="https://res.cloudinary.com/hoki0713/image/upload/v1591933990/team-mobeom/test_hyibea.jpg"
        alt="회원가입 광고"
      />

      <Link to="/account/term-n-condition">
        <Button className="w-100 mb-3" variant="primary" type="submit">
          회원가입
        </Button>
      </Link>
    </Form>
  </Container>
);

export default Login;
