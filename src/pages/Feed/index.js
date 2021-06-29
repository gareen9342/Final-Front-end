import React from "react";
import { Container, Card, Bar } from "./UI";
export default () => {
  return (
    <>
      <Bar username="username" />
      <Container>
        <Card content={"피드 내용"} username={"가린"} />
      </Container>
    </>
  );
};
