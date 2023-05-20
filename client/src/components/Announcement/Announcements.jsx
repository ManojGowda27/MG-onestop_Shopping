import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  color: #101419;
  background-color: #c0d6df;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
`;

const Announcements = () => {
  return <Container>Free shipping on all orders.</Container>;
};

export default Announcements;
