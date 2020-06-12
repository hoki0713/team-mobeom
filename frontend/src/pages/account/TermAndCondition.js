import React from "react";
import { MainLogo } from "../splash-page";

import { Container, Form, Button } from "react-bootstrap";

const TermAndCondition = () => (
  <Container className="mt-5">
    <MainLogo />
    <Form className="w-50 mx-auto">
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="전체동의" />
        <Form.Check type="checkbox" label="이용약관 동의(필수)" />
        <Form.Control as="textarea" rows="3" />
        <Form.Check
          type="checkbox"
          label="개인정보 수집 및 이용에 대한 안내(필수)"
        />
        <Form.Control as="textarea" rows="3" />
        <Form.Check type="checkbox" label="위치정보 이용약관 동의(필수)" />
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <div className="mx-auto">
        <Button className="w-25 ml-5 mr-5" variant="danger" type="submit">
          취소
        </Button>
        <Button className="w-25 ml-5 mr-5" variant="primary" type="submit">
          확인
        </Button>
      </div>
    </Form>
  </Container>
);

export default TermAndCondition;
