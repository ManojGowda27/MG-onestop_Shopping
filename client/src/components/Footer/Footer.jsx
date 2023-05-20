import { Instagram, Pinterest, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 50rem;
  ${mobile({ flexDirection: "column", padding: "0px", marginLeft: "0rem" })}
`;
const Logo = styled.h1`
  font-size: 35px;
  font-weight: bold;
  margin-left: 4rem;
  ${mobile({ textAlign: "center", paddingRight: "25px" })}
`;

const Description = styled.p`
  margin: 20px 0px;
  ${mobile({ margin: "10px", paddingLeft: "100px" })}
`;

const SocialContainer = styled.div`
  display: flex;
  ${mobile({ justifyContent: "center", paddingLeft: "25px" })}
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-left: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MG</Logo>
        <Description>🧠 behind: Manoj Gowda;</Description>
        <SocialContainer>
          <SocialIcon>
            <Instagram />
          </SocialIcon>

          <SocialIcon>
            <Twitter />
          </SocialIcon>

          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
    </Container>
  );
};

export default Footer;
